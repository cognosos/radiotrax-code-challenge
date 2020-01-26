/**
 * @module components/pagination
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// context
import {useThemeContext} from '../../context/theme'
// components
import Icon from '../icon'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A logo component that displays the Cognosos logo.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Pagination(props) {
  const {className, pages, selected} = props
  const {theme} = useThemeContext()

  const classNames = cls(
    style.root,
    style[theme],
    className
  )

  if (pages === 0) return

  const range = [...Array(pages).keys()]

  return (
    <ul className={classNames}>
      <li className={cls(style.arrow, style.waves)}>
        <a href="#!">
          <Icon type="chevron_left" />
        </a>
      </li>

      {range.map((page) => {
        const itemClasses = cls(
          {[style.active]: selected === page}
        )

        return (
          <li key={page} className={itemClasses}>
            <a href="#!">{page + 1}</a>
          </li>
        )
      })}

      <li className={cls(style.arrow, style.waves)}>
        <a href="#!">
          <Icon type="chevron_right" />
        </a>
      </li>
    </ul>
  )
}

Pagination.defaultProps = {
  pages: 5,
  selected: 0
}

export default Pagination
