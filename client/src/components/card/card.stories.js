// lib
import React from 'react'
import {storiesOf, addParameters} from '@storybook/react'
// components
import Card from '.'
import Button from '../button'

const lorem = 'Lorem ipsum ...'

storiesOf('Card', module)
  .add('Default', () => (
    <Card>{lorem}</Card>
  ))

  .add('Title', () => (
    <Card title="Test Title">
      {lorem}
   </Card>
  ))

  .add('Image', () => (
    <Card image={'https://via.placeholder.com/600'} title="My description">
      {lorem}
   </Card>
  ))

  .add('Actions', () => (
    <Card actions={[<Button label="Details" />, 'Close', 'Link']}>
      {lorem}
   </Card>
  ))

  .add('Image, Actions', () => (
    <Card
    image={'https://via.placeholder.com/600'}
    title="My description"
    actions={[<Button label="Details" />, 'Close', 'Link']}
    >
      {lorem}
    </Card>
  ))
