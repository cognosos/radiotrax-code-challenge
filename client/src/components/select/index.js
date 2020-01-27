/**
 * @module components/select
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

function Select(props) {
  const {
    label,
    options,
    disabled,
    inline,
    className,
    onChange
  } = props

  const {theme} = useThemeContext()
  const classNames = cls(
    style.root,
    style[theme],
    className,
    {[style.inline]: inline}
  )

  if (!options) throw new Error('Select requires Select.items or Select.children[SelectOption, SelectOption, ...]')

  /**
   * Handle the select changing via onChange
   * @param {Event} e The change event.
   */
  function handleChange(e) {
    const target = e.nativeEvent.target
    if (onChange) onChange(e, target.value)
  }

  // trust explicitly passed names, but prevent form field name collisions otherwise
  const uniqueName = name || _.uniqueId(`select_`)

  return (
    <div className={classNames}>
      {label && <label className={style.label}>{label}</label>}
      <div className={style.container}>
        <select name={uniqueName} className={style.select} onChange={handleChange}>
          {options.map((o, i) => (
            <option key={i} value={o.value}>{o.label}</option>
          ))}
        </select>
        <Icon type="chevron_right" className={style.arrow} />
      </div>
    </div>
  )
}

function SelectOption(props = {}) {
  const {to, label, className} = props
  return null
}

export default Select
