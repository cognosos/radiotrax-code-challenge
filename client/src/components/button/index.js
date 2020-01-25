/**
 * @module components/button
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
 * A simple button component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Button(props) {
  const {
    label,
    icon,
    disabled,
    className,
    onClick,
    iconPosition = 'right'
  } = props

  const {theme} = useThemeContext()
  const classNames = cls(
    style.root,
    style[theme],
    className
  )

  let iconComp
  if (typeof icon === 'string') {
    iconComp = <i className={cls('material-icons', style.icon)}>{icon}</i>
  } else {
    iconComp = <div className={style.icon}>{icon}</div>
  }

  return (
    <a className={classNames} onClick={onClick} disabled={disabled}>
      {icon && iconPosition === 'left' && iconComp}
      {label && <span>{label}</span>}
      {icon && iconPosition === 'right' && iconComp}
    </a>
  )
}

export default Button
