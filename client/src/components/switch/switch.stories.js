// lib
import React from 'react'
import {storiesOf, addParameters} from '@storybook/react'
// components
import Switch from '.'

storiesOf('Switch', module)
  .add('Default', () => (
    <Switch
      name='my-switch'
      trueText='Enabled'
      falseText='Disabled'
      label='Toggle Me'
    />
  ))

