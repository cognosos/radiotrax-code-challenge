/**
 * A hook to provide theme state to components.
 * @module hooks/useTheme
 */

// lib
import {useState} from 'react'

/**
 * Provide theme state and functions.
 */
function useTheme() {
  const [name, setName] = useState()
  const set = (n) => {
    localStorage.setItem('app-theme', `theme-${n}`)
    setName(`theme-${n}`)
  }

  return [name, set]
}

export default useTheme
