/**
 * @module components/sectionTitle
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
 * A title belonging to a section.
 * @param {Object} props The component properties.
 * @return {ReactElement}
 */
function Title(props){
  const {className, title, subTitle} = props
  const {theme} = useThemeContext()

  const classNames = cls([
    style.root,
    style[theme]
  ])

  if (title && !subTitle){
    return (
      <div className={classNames}>
        <h1 className={style.title}>{title}</h1>
      </div>
    )
  }

  return (
    <div className={classNames}>
      <h2 className={style.title}>{subTitle}</h2>
      <h1 className={style.subTitle}>{title}</h1>
    </div>
  )
}

Title.propTypes = {
  /** CSS class name(s). */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** The section title. */
  title: PropTypes.node,
  /** The section subtitle. */
  subTitle: PropTypes.node
}

export default Title
