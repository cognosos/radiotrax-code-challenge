/**
 * Provides the app theme to components and scenes.
 */

// lib
import {createContext, useContext} from 'react'

export const ThemeContext = createContext()

export function useThemeContext() {
  return useContext(ThemeContext)
}
