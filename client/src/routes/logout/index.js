/**
 * @module routes/logout
 */

// lib
import React from 'react'
// scenes
import Login from '../../scenes/login'
// components
import Icon from '../../components/icon'

export default {
  exact: true,
  path: '/logout',
  component: Login,
  //wrappers: [withDestroyCreds],
  nav: {
    label: 'Logout',
    icon: <Icon type="exit_to_app" />,
  }
}
