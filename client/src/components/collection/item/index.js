/**
 * @module components/collection/item
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// context
import {useThemeContext} from '../../../context/theme'
// components
import Icon from '../../icon'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A collection item component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function CollectionItem(props = {}) {
  const {className, title, description, onClick, actions} = props
  const {theme} = useThemeContext()

  const classNames = cls(
    style[theme],
    style.root,
    className,
    {[style.hasActions]: actions}
  )

  return (
    <li className={classNames} onClick={onClick}>
      <Icon type="signal_cellular_alt" className={style.icon} />
      <span className={style.title}>{title}</span>
      <div>{description}</div>
      {Array.isArray(actions) && actions.map((action, i) => (
        <div key={i} className={style.action}>{action}</div>
      ))}
    </li>
  )
}

export default CollectionItem
