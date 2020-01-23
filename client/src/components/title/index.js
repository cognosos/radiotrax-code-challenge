/**
 * @module components/sectionTitle
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// style
import style from './style.scss'

/**
 * A title belonging to a section.
 * @param {Object} props The component properties.
 * @return {ReactElement}
 */
function Title(props){
  const {title, subTitle} = props

  if (title && !subTitle){
    return (
      <div className={style.root}>
        <h1 className={style.title}>{title}</h1>
      </div>
    )
  }

  return (
    <div className={style.root}>
      <h2 className={style.title}>{subTitle}</h2>
      <h1 className={style.subTitle}>{title}</h1>
    </div>
  )
}

Title.propTypes = {
  /** The section title. */
  title: PropTypes.node,
  /** The section subtitle. */
  subTitle: PropTypes.node
}

export default Title
