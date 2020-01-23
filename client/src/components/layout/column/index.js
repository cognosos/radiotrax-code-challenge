/**
 * @module components/layout/column
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// style
import style from './style.scss'
import cls from 'classnames'

/**
 * A column component for laying out interface components.
 * @param {Object} props The component properties.
 * @return {ReactElement}
 */
function Column(props){
  const {children, className, span, centered, hcenter, vcenter, gutterless = true} = props

  const classNames = cls(
    style.column,
    className,
    {[style[`s${span}`]]: span},
    {[style.centered]: centered},
    {[style.hcenter]: hcenter},
    {[style.vcenter]: vcenter},
    {[style.gutterless]: gutterless}
  )

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

Column.propTypes = {
  /** Elements inside this component. */
  children: PropTypes.node,
  /** CSS class name(s). */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** The number of columns to span in the layout. Corresponds to Materialize layout classes. */
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Makes content in the column centered vertically and horizontally. */
  centered: PropTypes.bool,
  /** Should margins not exist for this layout component? */
  noGutters: PropTypes.bool
}

export default Column
