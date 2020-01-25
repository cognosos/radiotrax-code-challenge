/**
 * @module components/layout
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// context
import {useThemeContext} from '../../context/theme'
// components
import Row from './row'
import Column from './column'
// style
import style from './style.scss'
import cls from 'classnames'

/**
 * A general layout component.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Layout(props){
  const {className, children, full, centered, gutterless = true} = props
  const {theme} = useThemeContext()

  const classNames = cls(
    style.root,
    style[theme],
    className,
    {[style.full]: full},
    {[style.centerd]: centered},
    {[style.gutterless]: gutterless}
  )

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

Layout.propTypes = {
  /** CSS class name(s). */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Elements inside this component. */
  children: PropTypes.node,
}

export {
  Layout,
  Row,
  Column
}

export default Layout
