/**
 * @module components/badge
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// context
import {useThemeContext} from '../../context/theme'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A badge component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Badge(props) {
  const {className, children, size, color} = props
  const {theme} = useThemeContext()

  const classNames = cls(
    style.root,
    style[theme],
    className,
    style[color || 'defaultColor'],
    style[size || 'normal']
  )

  return <span className={classNames}>{children}</span>
}

export default Badge
