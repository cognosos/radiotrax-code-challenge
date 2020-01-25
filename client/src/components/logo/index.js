/**
 * @module components/logo
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// context
import {useThemeContext} from '../../context/theme'
// style
import cls from 'classnames'
import style from './style.scss'
// images
import logoFull from '../../assets/logo.png'
import logoC from '../../assets/logo-c.png'

/**
 * A logo component that displays the Cognosos logo.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Logo(props) {
  const {className, version, type, alt, width, height} = props
  const {theme} = useThemeContext()

  // type can be a single string or an array of strings
  const typeClassNames = cls((Array.isArray(type) ? type : [type]).reduce((sum, clsName) => {
    if (style[clsName]) sum.push(style[clsName])
      return sum
  }, []))

  const classNames = cls(
    style.root,
    style[theme],
    className
  )

  const src = (version === 'c') ? logoC : logoFull

  return (
    <div className={classNames}>
      <img className={typeClassNames} src={src} width={width} height={height} alt={alt} />
    </div>
  )
}

Logo.defaultProps = {
  version: 'full',
  type: 'large',
  alt: ''
}

export default Logo
