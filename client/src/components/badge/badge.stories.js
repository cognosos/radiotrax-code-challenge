// lib
import React from 'react'
import {storiesOf} from '@storybook/react'
// components
import Badge from '.'

storiesOf('Badge', module)
  .add('Default', () => (
    <Badge size="small" align="left">Test</Badge>
  ))
