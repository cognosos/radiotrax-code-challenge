// lib
import React from 'react'
import {storiesOf, addParameters} from '@storybook/react'
// components
import Button from '.'
import Loading from '../loading'

function clickHandler() {
  alert('Clicked!')
}

storiesOf('Button', module)
  .add('Default', () => (
    <Button label='Test' />
  ))

  .add('Icon', () => (
    <Button icon='cancel' />
  ))

  .add('Icon, Text', () => (
    <Button label='Test' icon='cancel' />
  ))

  .add('Subcomponent', () => (
    <Button label="Loading" icon={<Loading message={false} type='tiny' />} />
  ))

  .add('Click Handler', () => (
    <Button label='Click Me' onClick={clickHandler} />
  ))
