/**
 * @module components/topNav/withTopNav
 */

// lib
import React from 'react'
// components
import TopNav from './'

/**
 * Wrap Component with SideNav HOC.
 * @param {ReactComponent} Component The component to wrap.
 * @param {Object} wrapperProps Properties that come from Wrapper Hooks (see: src/components/routes/index.js).
 * @return {ReactComponent} HOC component.
 */
function withTopNav(Component, wrapperProps){
  /**
   * A Higher Order Component that provides SideNav.
   * @param {Array} props Component properties.
   * @return {ReactDOM} Wrapped component.
   */
  function topNavHOC(props) {
    return (
      <>
        <TopNav title={wrapperProps.title} items={wrapperProps.items} />
        <Component {...props} />
      </>
    )
  }

  return topNavHOC
}

export default withTopNav
