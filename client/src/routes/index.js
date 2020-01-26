/**
 * @module components/routes
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect, Switch} from 'react-router-dom'
// routes
import Login from './login'
import Logout from './logout'
import Device from './device'
import Devices from './devices'
import NotFound from './notFound'
// contexts
import {useAuthContext} from '../context/auth'
// components
import FadeIn from '../components/transitions/fadeIn'

/**
 * All application routies, in order of priority and side-nav rendering.
 */
export const ROUTES = [
  Devices,
  Device,
  Login,
  Logout,
  NotFound
]

/**
 * A route that requires user authentication to render child components.
 * @param {Object} props The component properties.
 * @return {ReactElement}
 */
function PrivateRoute(props){
  const {component: Component, wrappers, hooks, ...routeProps} = props
  const {auth, setAuth} = useAuthContext()
  const isAuthenticated = true

  if (!isAuthenticated) return <Redirect to={{pathname: '/login', state: {from: location}}} />

  const CompWithTransition = (props) => <FadeIn><Component {...routeProps} /></FadeIn>
  const WrappedComp = applyWrappersToRoute(CompWithTransition, routeProps, wrappers, hooks)

  return (
    <Route {...routeProps}>
      <WrappedComp props={routeProps} />
    </Route>
  )
}

PrivateRoute.propTypes = {
  /** The component to protected behind permissions. */
  component: PropTypes.object,
  /** Browser location object. */
  location: PropTypes.object,
  /** The remaining component properties. */
  routeProps: PropTypes.array
}

/**
 * Wrappers are HOC's that are automatically wrapped around a given container.
 * Wrappers are applied in order, with default wrappers being executed first.
 * Wrapper data can be passed data from a route.hooks object of the same name as the wrapper component.
 * Hooks are callback functions that execute when the component is wrapped and their properties are passed to the wrapper.
 * @param {ReactElement} component The components to be wrapped.
 * @param {Array} wrappers The components to wrap around the route component.
 * @param {Array} hooks The component callback hooks to execute on the matched wrapper.
 * @return {Object} A HOC-wrapped route component.
 */
function applyWrappersToRoute(component, props, wrappers = [], hooks = []){
  const wrappedComponent = wrappers.reduce((aggregateComp, Wrapper) => {
    const wrapperName = Wrapper.prototype.constructor.name
    let hookProps = {}

    // assign/execute hooks and pass to the component wrapper props
    if (hooks) {
      if (typeof hooks[wrapperName] === 'function'){
        hookProps = hooks[wrapperName](props)
      } else {
        hookProps = hooks[wrapperName]
      }
    }

    return Wrapper(aggregateComp, hookProps)
  }, component)

  return wrappedComponent
}

/**
 * Generate route components for each route passed in.
 * @param {Object} props Rote properties.
 * @return {ReactElement}
 */
function Routes(props){
  const renderRoutes = () => {
    return ROUTES.map((route) => {
      const RouteComponent = route.private ? PrivateRoute : Route

      return (
        <RouteComponent
          {...props}
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
          wrappers={route.wrappers}
          hooks={route.hooks}
        />
      )
    })
  }

  return (
    <Switch location={location}>
      {renderRoutes()}
    </Switch>
  )
}

export default Routes
