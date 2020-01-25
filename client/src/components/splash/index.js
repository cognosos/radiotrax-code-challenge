/**
 * @module components/splash
 */

// lib
import React from 'react'
// style
import style from './style.scss'

/**
 * A component that takes over the full page.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function Splash(props){
  const {message} = props

  return (
    <div className={style.root}>
      <h3>{message}</h3>
    </div>
  )
}

export default Splash
