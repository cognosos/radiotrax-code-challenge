/**
 * @module components/pagination
 */

// lib
import React, {useState} from 'react'
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
  const {className, pages, onChange} = props
  const [selected, _setSelected] = useState(props.selected)
  const {theme} = useThemeContext()

  const classNames = cls(
    style.root,
    style[theme],
    className
  )

  if (pages === 0) return

  /** Keep selected in bounds */
  function setSelected(page) {
    page = Math.max(page, 0)
    page = Math.min(page, pages - 1)
    if (page !== selected) {
      _setSelected(page)
      if (onChange) onChange(page)
    }
  }

  const range = [...Array(pages).keys()]

  return (
    <ul className={classNames}>
      <li className={cls(style.arrow, style.waves)} onClick={() => setSelected(selected - 1)}>
        <a><Icon type="chevron_left" /></a>
      </li>

      {range.map((page) => {
        const itemClasses = cls(
          {[style.active]: selected === page}
        )

        return (
          <li key={page} className={itemClasses} onClick={() => setSelected(page)}>
            <a>{page + 1}</a>
          </li>
        )
      })}

      <li className={cls(style.arrow, style.waves)} onClick={() => setSelected(selected + 1)}>
        <a><Icon type="chevron_right" /></a>
      </li>
    </ul>
  )
}

Pagination.defaultProps = {
  selected: 0
}

export default Pagination
