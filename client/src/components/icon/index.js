/**
 * @module components/icon
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A Material-basedicon component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Icon(props) {
  const {className, type, color, size} = props

  const classNames = cls(
    'material-icons',
    style.root,
    className,
    style[color],
    style[size || 'small']
  )

  return <i className={classNames}>{type}</i>
}

export default Icon
