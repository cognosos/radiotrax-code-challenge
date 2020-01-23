/**
 * Provides authentication information.
 */

// lib
import {createContext, useContext} from 'react'

export const AuthContext = createContext()

export function useAuthContext() {
  return useContext(AuthContext)
}
