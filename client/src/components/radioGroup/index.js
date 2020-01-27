/**
 * @module components/radioGroup
 */

// lib
import React, {useState} from 'react'
import PropTypes from 'prop-types'
// context
import {useThemeContext} from '../../context/theme'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A radio button component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function RadioGroup(props) {
  const {className, inline, label, items, onChange} = props
  const [selected, setSelected] = useState(0)
  const {theme} = useThemeContext()

  const classNames = cls([
    style.root,
    style[theme],
    className,
    {[style.inline]: inline}
  ])

  /**
   * Handle the input changing.
   * @param {Event} e The change event.
   * @param {Number} index The index of the button in the group.
   */
  function handleChange(e, index) {
    const {value} = e.nativeEvent.target

    setSelected(index)
    if (onChange) onChange(e, value, index)
  }

  return (
    <div className={classNames}>
      {label && <label className={style.mainLabel}>{label}</label>}
      <div className={style.container}>
        {items.map((item, i) => {
          const {label: lbl, value} = item
          const isSelected = selected === i

          return (
            <div key={i} className={style.button}>
              <label className={style.label}>
                <input
                  className={style.input}
                  type="checkbox"
                  onClick={(e) => handleChange(e, i)}
                  checked={isSelected}
                  value={value}
                  onChange={() => {}}
                />

                <div className={cls(style.input, style.radio, className)} />
                <span>{lbl}</span>
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

RadioGroup.propTypes = {
  /** CSS class name(s). */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** The label of the input element. */
  label: PropTypes.string,
  /** An input change handler. */
  onChange: PropTypes.func
}

export default RadioGroup
