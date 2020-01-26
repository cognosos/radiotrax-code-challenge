/**
 * Initialize the application.
 */

// lib
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import "core-js/stable"
import "regenerator-runtime/runtime";
// redux
import store from './redux'
// routes
import Routes from './routes'
// localization
import i18n from './i18n'
// services
import history from './services/history'
// scenes
import AppScene from './scenes'
// components
import ErrorBoundary from './components/errorBoundary'
import Splash from './components/splash'
import Loading from './components/loading'
// style
import './stylesheets/app.scss'

const fallback = <Splash message={<Loading />} />

const Root = (
  <ErrorBoundary>
    <Provider store={store}>
      <Router history={history}>
        <AppScene>
          <Routes />
        </AppScene>
      </Router>
    </Provider>
  </ErrorBoundary>
)

render(Root, document.getElementById('app'))
