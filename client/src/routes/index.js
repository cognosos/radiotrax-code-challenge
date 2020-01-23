/**
 * @module components/routes
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect, Switch} from 'react-router-dom'
import {AnimatedSwitch} from 'react-router-transition'
// contexts
import {useAuthContext} from '../context/auth'
// components
import Splash from '../components/splash'
// constants
import {ROUTES} from './routes'
import {MESSAGES} from '../constants/app'
// style
import style from '../stylesheets/routes.scss'

/**
 * A route that requires user authentication to render child components.
 * @param {Object} props The component properties.
 * @return {ReactElement}
 */
function PrivateRoute(props){
  const {component: Component, location, ...routeProps} = props
  const {auth, setAuth} = useAuthContext()
  const isAuthenticated = true

  function render(props) {
    //if (!auth.isAuthenticated) {
    if (!isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: location}
          }}
        />
      )
    } else {
      return <Component {...props} />
    }
  }

  return <Route {...routeProps} render={(props) => render(props)} />
}

PrivateRoute.propTypes = {
  /** The component to protected behind permissions. */
  component: PropTypes.func,
  /** Browser location object. */
  location: PropTypes.object,
  /** The remaining component properties. */
  routeProps: PropTypes.array
}

/**
 * Wrappers are HOC's that are automatically wrapped around a given container.
 * Wrappers are applied in order, with default wrappers being executed first.
 * Wrapper data can be passed data from a route.hooks object of the same name as the wrapper component.
 * Hooks are functions that execute when the component is wrapped and their properties are passed to the wrapper.
 * @param {Array} wrappers The components to wrap around the route component.
 * @param {Object} route A routing object.
 * @return {Object} A HOC-wrapped route component.
 */
function applyWrappersToRoute(wrappers = [], route){
  const wrappedComponent = wrappers.reduce((aggregateComp, Wrapper) => {
    const wrapperName = Wrapper.prototype.constructor.name
    let hookProps = {}

    // assign/execute hooks and pass to the component wrapper props
    if (route.hooks){
      if (typeof route.hooks[wrapperName] === 'function'){
        hookProps = route.hooks[wrapperName](route)
      } else {
        hookProps = route.hooks[wrapperName]
      }
    }

    return Wrapper(aggregateComp, hookProps)
  }, route.component)

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
          component={applyWrappersToRoute(route.wrappers, route)}
          hooks={route.hooks} />
      )
    })
  }

  return (
    <AnimatedSwitch
      atEnter={{opacity: 0}}
      atLeave={{opacity: 0}}
      atActive={{opacity: 1}}
      className={style.switchWrapper}
    >
      {renderRoutes()}
    </AnimatedSwitch>
  )
}

export default Routes
