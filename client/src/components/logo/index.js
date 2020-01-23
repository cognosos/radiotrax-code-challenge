/**
 * @module components/logo
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
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

  // type can be a single string or an array of strings
  const typeClassNames = (Array.isArray(type) ? type : [type]).reduce((sum, clsName) => {
    if (style[clsName]) sum.push(style[clsName])
      return sum
  }, [])

  const imgClassNames = cls(
    style.root,
    style[type],
    ...typeClassNames
  )

  const src = (version === 'c') ? logoC : logoFull

  return (
    <div className={className}>
      <img className={imgClassNames} src={src} width={width} height={height} alt={alt} />
    </div>
  )
}

Logo.defaultProps = {
  version: 'full',
  type: 'large',
  alt: ''
}

export default Logo
