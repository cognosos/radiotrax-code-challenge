/**
 * @module components/collection
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// context
import {useThemeContext} from '../../context/theme'
// components
import CollectionItem from './item'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A collection component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Collection(props) {
  const {className, items = []} = props
  const {theme} = useThemeContext()

  const classNames = cls(
    style[theme],
    style.root,
    className,
  )

  return (
    <ul className={classNames}>
      {items.map((item, i) => (
        <CollectionItem key={i} {...item} />
      ))}
    </ul>
  )
}

export default Collection
