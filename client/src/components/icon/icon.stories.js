// lib
import React from 'react'
import {storiesOf, addParameters} from '@storybook/react'
// components
import Icon from '.'

storiesOf('Icon (Material)', module)
  .add('Small', () => (
    <Icon type="account_circle" size="small" />
  ))

  .add('Medium', () => (
    <Icon type="account_circle" />
  ))

  .add('Large', () => (
    <Icon type="account_circle" size="large" />
  ))
