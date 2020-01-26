/**
 * @module routes/notFound
 */

// lib
import React from 'react'
// components
import Splash from '../../components/splash'
// constants
import {MESSAGES} from '../../constants/app'

export default {
  exact: false,
  path: null,
  component: () => <Splash message={MESSAGES.NOT_FOUND} />,
}
