/**
 * @module components/topNav/item
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * Top nav bar item.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function TopNavItem(props) {
  const {className, label, to} = props

  return (
    <li>
      <Link className={cls(style.navItem, className)} to={to}>
        {label}
      </Link>
    </li>
   )
}

export default TopNavItem
