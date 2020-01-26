/**
 * @module components/sideNav/withSideNav
 */

// lib
import React from 'react'
import PropTypes from 'prop-types'
// components
import SideNav from './'
// constants
import {ROUTES} from '../../routes'
// style
import style from './style.scss'

/**
 * Wrap Component with SideNav HOC.
 * @param {ReactComponent} Component The component to wrap.
 * @param {Object} wrapperProps Properties that come from Wrapper Hooks (see: src/components/routes/index.js).
 * @return {ReactComponent} HOC component.
 */
function withSideNav(Component, wrapperProps){
  /**
   * A Higher Order Component that provides SideNav.
   * @param {Array} props Component properties.
   * @return {ReactDOM} Wrapped component.
   */
  function sideNavHOC(props) {
    return (
      <>
        <SideNav routes={ROUTES} />
        <div className={style.withSideNav}>
          <Component {...props} />
        </div>
      </>
    )
  }

  return sideNavHOC
}

export default withSideNav
