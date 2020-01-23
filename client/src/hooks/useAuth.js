/**
 * A hook to provide authentication token state and manipulation.
 * @module hooks/useAuth
 */

// lib
import {useState} from 'react'

/**
 * Provide auth state and functions.
 */
function useAuth() {
  const [user, setUsername] = useState()
  const [pass, setPassword] = useState()
  const [authed, setIsAuthenticated] = useState()

  const setAuth = (data) => {
    const {username, password, isAuthenticated} = data
    localStorage.setItem('auth-credentials', JSON.stringify({username, password}))
    setUsername(username)
    setPassword(password)
    setIsAuthenticated(isAuthenticated)
  }

  const response = {username: user, password: pass, isAuthenticated: authed}
  return [response, setAuth]
}

export default useAuth
