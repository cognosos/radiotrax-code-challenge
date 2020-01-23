/**
 * @module components/errorBoundary/withErrorBoundary
 */

// lib
import React from 'react'
// containers
import ErrorBoundary from './'

/**
 * Wrap Component with an Error Boundary.
 * @param {ReactComponent} Comp The component to wrap.
 * @return {ReactComponent} HOC component.
 */
export default function withErrorBoundary(Comp){
  /**
   * A Higher Order Component that provides ErrorBoundary.
   * @param {Object} props The component properties.
   * @return {ReactElement}
   */
  function ErrorBoundaryHOC(props){
    return (
      <ErrorBoundary>
        <Comp {...props} />
      </ErrorBoundary>
    )
  }

  return ErrorBoundaryHOC
}
