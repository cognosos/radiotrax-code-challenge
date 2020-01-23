/**
 * @module components/sideNav
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// components
import SideNavItem from './item'
import Icon from '../icon'
import Logo from '../logo'
// style
import style from './style.scss'

/**
 * App side navigation.
 * @param {Object} props The component properties.
 * @return {ReactElement}
 */
function SideNav(props){
  const {history, hide} = props
  let {routes = []} = props

  routes = routes.reduce((sum, path) => {
    if (path.nav && !sum[path.nav.label]) sum[path.nav.label] = path
    return sum
  }, {})

  return (
    <div className={style.root}>
      {Object.keys(routes).map((key, i) => {
        const route = routes[key]
        const {label, icon} = route.nav
        return (
          <SideNavItem key={i} path={route.path} label={label} icon={icon} />
        )
      })}
      <Logo className={style.watermark} width="50" height="50" version="c" type={['grayscale', 'watermark']} />
    </div>
  )
}

SideNav.propTypes = {
  /** The browser history object. */
  history: PropTypes.object,
  /** Navigation routes. */
  routes: PropTypes.array,
  /** A function to manage hiding side nav items. */
  hide: PropTypes.func
}

export default SideNav
