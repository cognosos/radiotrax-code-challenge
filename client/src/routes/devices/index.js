/**
 * @module routes/devices
 */

// lib
import React from 'react'
// scenes
import Devices from '../../scenes/devices'
// components
import withSideNav from '../../components/sideNav/withSideNav'
import withTopNav from '../../components/topNav/withTopNav'
import Icon from '../../components/icon'

export default {
  exact: true,
  private: true,
  path: '/devices',
  component: Devices,
  wrappers: [withSideNav, withTopNav],
  private: true,
  hooks: {
    withTopNav: {
      title: 'Search Devices'
    }
  },
  nav: {
    label: 'Devices',
    icon: <Icon type="wifi" />,
  }
}
