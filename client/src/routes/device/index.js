/**
 * @module routes/device
 */

// lib
import React from 'react'
// scenes
import Device from '../../scenes/device'
// components
import withSideNav from '../../components/sideNav/withSideNav'
import withTopNav from '../../components/topNav/withTopNav'

export default {
  exact: true,
  private: true,
  path: '/devices/:id',
  component: Device,
  wrappers: [withSideNav, withTopNav],
  hooks: {
    withTopNav: {
      title: 'Search Devices > Device',
      items: [{
        label: 'Back',
        icon: 'keyboard_backspace',
        to: '/devices'
      }]
    }
  }
}
