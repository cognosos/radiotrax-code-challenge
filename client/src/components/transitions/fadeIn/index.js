/**
 * @module transitions/fadeIn
 */

// lib
import React from 'react'
import {CSSTransition} from "react-transition-group";
// style
import style from './style.scss'

function FadeIn(props) {
  const {children} = props

  return (
    <CSSTransition appear={true} in={true} timeout={1000} classNames={style.fadeIn} unmountOnExit>
      <div>{children}</div>
    </CSSTransition>
  )
}

export default FadeIn
