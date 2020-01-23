// lib
import React from 'react'
import {storiesOf, addParameters} from '@storybook/react'
// components
import Loading from '.'

storiesOf('Loading', module)
  .add('Default', () => (
    <Loading theme="primary" />
  ))

  .add('Message', () => (
    <Loading theme={['primary']} message="Hang on a sec'" />
  ))

  .add('Tiny', () => (
    <Loading theme={['tiny', 'primary']} />
  ))

