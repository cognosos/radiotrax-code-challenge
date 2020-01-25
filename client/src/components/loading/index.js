/**
 * @module components/loading
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A loading indicator component.
 * @param {Object} props The component props
 * @return {ReactElement}
 */
function Loading(props){
  const {className, message, children, type} = props
  const types = Array.isArray(type) ? type.map((t) => style[t]) : style[type]

  const classNames = cls(
    style.root,
    className,
    types
  )

  return (
    <div className={classNames}>
      <div className={style.spinner} />
      {message && <span className={style.message}>{message || children || 'Loading'}</span>}
    </div>
  )
}

Loading.propTypes = {
  /** CSS class name(s). */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** A message for the card. */
  message: PropTypes.string,
  /** Elements inside this component. */
  children: PropTypes.node
}

export default Loading
