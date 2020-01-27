/**
 * @module components/input
 */

// lib
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
// context
import {useThemeContext} from '../../context/theme'
// components
import Icon from '../icon'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * An input component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Input(props) {
  const {
    className,
    name,
    type,
    label,
    placeholder,
    required,
    requiredLabel,
    disabled,
    pattern,
    icon,
    minLength,
    maxLength,
    // events
    onChange,
    onKeyDown,
    // form field status
    fieldState
  } = props

  if (!type) throw new Error('Input Error: Component requires an explicit `type`.')

  const {theme} = useThemeContext()
  const [validation, setValidation] = useState(fieldState)

  // trust explicitly passed names, but prevent form field name collisions otherwise
  const uniqueName = name || _.uniqueId(`input_${type}_`)

  /**
   * Handle the input changing via onChange or onKeyDown.
   * @param {Event} e The change event.
   */
  function handleChange(e) {
    // check internal input element validity for error procesing,
    // based on [required] and [pattern] attributes.
    const target = e.nativeEvent.target
    const {validity: {valueMissing, patternMismatch}} = target
    const isInvalid = valueMissing || patternMismatch

    if (e.type === 'change' && onChange) onChange(e, target.value, !isInvalid)
    if (e.type === 'keydown' && onKeyDown) onKeyDown(e, target.value, !isInvalid)

    setValidation({
      touched: true,
      error: isInvalid
    })
  }

  const classNames = cls(
    style.root,
    style[theme],
    className,
    {[style.withLabel]: label || required},
    {[style.withIcon]: icon},
    {[style.error]: validation.error}
  )

  const labelText = label ? <span>{label}</span> : ''
  const requiredText = (required && requiredLabel) ? <span className={style.required}>required</span> : ''

  return (
    <div className={classNames}>
      <input
        className={style.input}
        name={uniqueName}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        pattern={pattern}
        onChange={handleChange}
        onKeyDown={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        tooltip={label}
      />
      {icon && <Icon type={icon} className={cls(style.icon, style.prefix)} />}
      {(label || required) && <label htmlFor={uniqueName}>{labelText}{requiredText}</label>}
    </div>
  )
}

Input.defaultProps = {
  maxLength: 255,
  fieldState: {
    touched: false,
    error: false
  }
}

Input.propTypes = {
  /** CSS class name(s). */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** The type of input element. */
  type: PropTypes.string,
  /** Is this element required? */
  required: PropTypes.bool,
  /** Is this input element disabled? */
  disabled: PropTypes.bool,
  /** The label of the input element. */
  label: PropTypes.string,
  /** The placeholder text for the input. */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** An icon associated with the input. */
  icon: PropTypes.string,
  /** The maximum length of the input field. */
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** An input change handler. */
  onChange: PropTypes.func,
  /** Form element state. */
  fieldState: PropTypes.shape({
    /** Has the user ever interacted with this component. */
    touched: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** Does this component have any errors. */
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
  })
}

export default Input
