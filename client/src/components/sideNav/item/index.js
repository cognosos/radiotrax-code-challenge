/**
 * @module components/sideNav/item
 */

// lib
import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A side navigation item.
 * @param {Object} props The component properties.
 * @return {ReactElement}
 */
function SideNavItem(props){
  const {path, label, icon, children} = props
  const active = true

  return (
    <div className={cls(style.root, {[style.active]: active})}>
      <NavLink to={path}>
        <div className={style.icon}>{icon}</div>
        <p className={style.text}>{label}</p>
      </NavLink>
    </div>
  )
}

SideNavItem.propTypes = {
  /** Elements inside this component. */
  children: PropTypes.node,
  /** The name of the nav item. */
  name: PropTypes.string,
  /** The path of the nav item. */
  path: PropTypes.string
}

export default SideNavItem