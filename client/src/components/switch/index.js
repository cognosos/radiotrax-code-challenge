/**
 * @module components/switch
 */

// lib
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
// style
import style from './style.scss'

/**
 * A switch component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Switch(props) {
  const {label, trueText, falseText, onChange} = props
  const [isChecked, setIsChecked] = useState(props.checked)
  const id = _.uniqueId('switch-')

  /**
   * A handler for toggle selection changing.
   * @param {Event} e The change event.
   */
  function handleChange(e){
    setIsChecked(e.nativeEvent.target.checked)
    if (onChange) onChange(e, data, e.nativeEvent.target.checked)
  }

  return (
    <div className={style.root}>
      <label className={style.label}>{label}</label>
      <input
        id={id}
        className={style.input}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <div className={style.container}>
        <label htmlFor={id} className={style.switch}>
          <div className={style.knob} />
        </label>
        <label htmlFor={id} className={style.value}>
          {isChecked ? trueText : falseText}
        </label>
      </div>
    </div>
  )
}

Switch.defaultProps = {
  label: '',
  checked: false
}

Switch.propTypes = {
  /** The toggle status. */
  checked: PropTypes.bool,
  /** The text to display next to the toggle switch. */
  label: PropTypes.string,
  /** Text for the "True" selection. */
  trueText: PropTypes.string,
  /** Text for the "False" selection. */
  falseText: PropTypes.string,
  /** A handler for toggle selection changing. */
  onChange: PropTypes.func
}

export default Switch
