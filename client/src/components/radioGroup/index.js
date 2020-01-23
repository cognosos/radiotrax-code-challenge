/**
 * @module components/radioGroup
 */

// lib
import React, {useState} from 'react'
import PropTypes from 'prop-types'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A radio button component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function RadioGroup(props) {
  const {className, items, onChange} = props
  const [selected, setSelected] = useState(0)

  const classNames = cls([
    className,
    style.root
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
    {items.map((item, i) => {
      const {label, value} = item
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
            <span>{label}</span>
          </label>
        </div>
      )
    })}
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
