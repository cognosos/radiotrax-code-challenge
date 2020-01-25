/**
 * @module components/sideNav
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// context
import {useThemeContext} from '../../context/theme'
// components
import SideNavItem from './item'
import Icon from '../icon'
import Logo from '../logo'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * App side navigation.
 * @param {Object} props The component properties.
 * @return {ReactElement}
 */
function SideNav(props){
  const {className} = props
  const {theme} = useThemeContext()
  let {routes = []} = props

  routes = routes.reduce((sum, path) => {
    if (path.nav && !sum[path.nav.label]) sum[path.nav.label] = path
    return sum
  }, {})

  const classNames = cls(
    style.root,
    style[theme],
    className
  )

  return (
    <div className={classNames}>
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
  /** CSS class name(s). */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Navigation routes. */
  routes: PropTypes.array
}

export default SideNav
