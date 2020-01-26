/**
 * @module scenes
 */

// lib
import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {ToastProvider} from 'react-toast-notifications'
// contexts
import {AuthContext} from '../context/auth'
import {ThemeContext} from '../context/theme'
// hooks
import useAuth from '../hooks/useAuth'
import useTheme from '../hooks/useTheme'
// style
import cls from 'classnames'
import style from './style.scss'

/**
 * The main application scene.
 * Renders all subsequent route-provided scenes as children.
 * @param {Object} props Component properties.
 * @return {ReactElement}
 */
function AppScene(props) {
  const {children} = props
  const [auth, setAuth] = useAuth()
  const [theme, setTheme] = useTheme()
  const location = useLocation()

  // keep the page up to date with the current theme
  useEffect(() => {
    const themeName = 'dark'
    document.body.classList.add(style[`theme-${themeName}`])
    setTheme(themeName)
  }, [])

  // scroll to the top of the page on every location change
  useEffect(() => window.scrollTo(0, 0), [location])

  const classNames = cls(
    style.appContainer,
    style[theme]
  )

  return (
    <div className={classNames}>
      <AuthContext.Provider value={{auth, setAuth}}>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <ToastProvider placement="top-center" autoDismiss autoDismissTimeout={2000}>
            {children}
          </ToastProvider>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </div>
  )
}

export default AppScene
