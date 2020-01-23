/**
 * @module routes/routes
 */

// lib
import {lazy} from 'react'
// scenes
const Login = lazy(() => import('../scenes/login'));
const Device = lazy(() => import('../scenes/device/'));
const Devices = lazy(() => import('../scenes/devices'));
// components
import Splash from '../components/splash'
import Icon from '../components/icon'
import withErrorBoundary from '../components/errorBoundary/withErrorBoundary'
import withSideNav from '../components/sideNav/withSideNav'
import withTopNav from '../components/topNav/withTopNav'
import withDestroyCreds from '../services/auth/withDestroyCreds'
// constants
import {MESSAGES} from '../constants/app'

// lib
import React from 'react'

/**
 * All application routing.
 */
export const ROUTES = [
  {
    exact: true,
    private: true,
    path: '/devices',
    component: Devices,
    wrappers: [withSideNav, withTopNav],
    private: true,
    hooks: {
      withTopNav: () => ({
        title: 'Devices'
      })
    },
    nav: {
      label: 'Devices',
      icon: <Icon type="wifi" />,
    }
  },
  {
    exact: true,
    private: true,
    path: '/devices/:id',
    component: Device,
    wrappers: [withSideNav, withTopNav],
    hooks: {
      withTopNav: () => ({
        title: 'Devices > Device',
        items: [{
          label: 'Back',
          icon: 'keyboard_backspace',
          to: '/devices'
        }]
      })
    }
  },
  {
    exact: true,
    path: ['/', '/login'],
    component: Login
  },
  {
    exact: true,
    path: '/logout',
    component: Login,
    //wrappers: [withDestroyCreds],
    nav: {
      label: 'Logout',
      icon: <Icon type="exit_to_app" />,
    }
  },
  {
    exact: false,
    path: null,
    component: () => <Splash message={MESSAGES.NOT_FOUND} />,
  }
]

export default ROUTES
