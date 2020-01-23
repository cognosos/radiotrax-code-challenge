/**
 * @module components/layout/row
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// style
import style from './style.scss'
import cls from 'classnames'

/**
 * A row component for laying out interface components.
 * @param {Object} props The component properties.
 * @return {ReactElement}
 */
function Row(props){
  const {children, className, centered, gutterless = true} = props
  const classNames = cls(
    style.row,
    className,
    {[style.centered]: centered},
    {[style.gutterless]: gutterless}
  )

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

Row.defaultProps = {
  centered: false,
  noGutters: false
}

Row.propTypes = {
  /** Elements inside this component. */
  children: PropTypes.node,
  /** CSS class name(s). */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Makes content in the column centered vertically and horizontally. */
  centered: PropTypes.bool,
  /** Should margins not exist for this layout component? */
  noGutters: PropTypes.bool
}

export default Row
