/**
 * Initialize the application.
 */

// lib
import React, {Suspense} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import "core-js/stable"
import "regenerator-runtime/runtime";
import {ToastProvider} from 'react-toast-notifications'
// redux
import store from './redux'
// contexts
import {AuthContext} from './context/auth'
// hooks
import useAuth from './hooks/useAuth'
// routes
import Routes from './routes/'
// localization
import i18n from './i18n'
// services
import history from './services/history/'
// components
import ErrorBoundary from './components/errorBoundary'
import Loading from './components/loading'
// style
import './stylesheets/app.scss'

function App(props) {
  const [auth, setAuth] = useAuth()

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <Suspense fallback={<Loading />}>
        <Routes {...props} />
      </Suspense>
    </AuthContext.Provider>
  )
}

const Root = (
  <ErrorBoundary>
    <Provider store={store}>
        <AuthContext.Provider value={true}>
          <Router history={history}>
            <ToastProvider placement="top-center" autoDismiss autoDismissTimeout={2000}>
              <App />
            </ToastProvider>
          </Router>
        </AuthContext.Provider>
    </Provider>
  </ErrorBoundary>
)

render(Root, document.getElementById('app'))
