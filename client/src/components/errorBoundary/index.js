/**
 * @module components/errorBoundary
 */

// lib
import React, {Component} from 'react'
import PropTypes from 'prop-types'
// context
import {useThemeContext} from '../../context/theme'
// components
import Splash from '../splash'
// constants
import {MESSAGES} from '../../constants/app'

/**
 * Captures errors and renders fallback elements.
 * @extends {Component}
 */
class ErrorBoundary extends Component{
  /**
   * Setup state.
   * @param {Object} props Component properties.
   */
  constructor(props){
    super(props)

    this.state = {
      error: null
    }
  }

  /**
   * Flag that there are errors.
   * @param {Object} error The error.
   * @return {Object} The new error state.
   */
  static getDerivedStateFromError(error){
    console.error('ErrorBoundary caught:', error)
    return {
      error: true
    }
  }

  /**
   * Render the error.
   * @return {ReactElement}
   */
  render(){
    const {children} = this.props
    const {error} = this.state

    return <div>{error ? <Splash message={MESSAGES.UNRECOVERABLE} /> : children}</div>
  }
}

ErrorBoundary.propTypes = {
  /** Elements inside this component. */
  children: PropTypes.node
}

export default ErrorBoundary
