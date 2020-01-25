/**
 * @module components/checkbox
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
 * A checkbox component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Checkbox(props) {
  const {className, label, onChange} = props
  const {theme} = useThemeContext()

  const classNames = cls([
    style[theme],
    className,
    style.root
  ])

  /**
   * Handle the input changing.
   * @param {Event} e The change event.
   */
  function handleChange(e){
    if (onChange) onChange(e)
  }

  return (
    <div className={classNames}>
      <label className={style.label}>
        <input
          className={style.input}
          type="checkbox"
          onChange={handleChange}
        />

        <div className={cls(style.input, style.checkbox, className)}>
          <i className="material-icons">check</i>
        </div>

        <span>{label}</span>
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  /** CSS class name(s). */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** The label of the input element. */
  label: PropTypes.string,
  /** An input change handler. */
  onChange: PropTypes.func
}

export default Checkbox
