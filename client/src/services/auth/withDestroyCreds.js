/**
 * @module services/auth/withDestroyCreds
 */

// lib
import React from 'react'
// contexts
import {useAuthContext} from '../../context/auth'

/**
 * Wrapper that destroys credentials when used.
 * @param {ReactComponent} Component The component to wrap.
 * @param {Object} wrapperProps Properties that come from Wrapper Hooks (see: src/components/routes/index.js).
 * @return {ReactComponent} HOC component.
 */
function withDestroyCreds(Component, wrapperProps){
  /**
   * A Higher Order Component that destroys creds.
   * @param {Array} props Component properties.
   * @return {ReactDOM} Wrapped component.
   */
  function destroyCredsHOC(props) {
    const {setAuth} = useAuthContext()
    setAuth({username: undefined, password: undefined, isAuthenticated: false})
    return <Component {...props} />
  }

  return destroyCredsHOC
}

export default withDestroyCreds
