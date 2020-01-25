/**
 * @module scenes
 */

// lib
import React, {useEffect} from 'react'
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

  useEffect(() => {
    const themeName = 'dark'
    document.body.classList.add(style[`theme-${themeName}`])
    setTheme(themeName)
  }, [])

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
