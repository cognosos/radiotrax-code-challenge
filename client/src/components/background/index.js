/**
 * @module components/background
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// context
import {useThemeContext} from '../../context/theme'
// constants
import CONFIG from './background.config.json'
// components
import Particles from 'react-particles-js'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * A logo component that displays the Cognosos logo.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Logo(props) {
  const {className} = props
  const {theme} = useThemeContext()

  const classNames = cls(
    style.root,
    style[theme],
    className
  )

  return (
    <div className={classNames}>
      <Particles params={CONFIG} width="100%" height="100vh"  />
    </div>
  )
}

export default Logo
