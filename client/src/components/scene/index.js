/**
 * @module components/scene
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
// context
import {useThemeContext} from '../../context/theme'
// components
import Title from '../title'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A component that contains all scene layout.
 * @param {Object} props The component properties.
 * @return {ReactElement}
 */
function Scene(props){
  const {className, children, title, subtitle, full, centered, panes, match} = props
  const {theme} = useThemeContext()

  const classNames = cls(
    style.root,
    style[theme],
    className,
    {[style.full]: full},
    {[style.centered]: centered}
  )

  const header = (
    <div className={style.header}>
      <Title title={title} subtitle={subtitle} />
    </div>
  )

  return (
    <div className={classNames}>
      {(title || subtitle) && header}
      <div className={style.body}>
        {children}
      </div>
    </div>
  )
}

Scene.defaultProps = {
  full: false,
  centered: false
}

Scene.propTypes = {
  /** CSS class name(s). */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Elements inside this component. */
  children: PropTypes.node,
  /** The redux router path match object. */
  match: PropTypes.object,
  /** The scene title. */
  title: PropTypes.string,
  /** The scene subtitle. */
  subtitle: PropTypes.node,
  /** Scene errors that, when present, will disable the save button. */
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /** Should the layout take up the page? */
  full: PropTypes.bool,
  /** Shoudl the layout be horizontally and vertically centerd on the page? */
  centered: PropTypes.bool
}

export default Scene
