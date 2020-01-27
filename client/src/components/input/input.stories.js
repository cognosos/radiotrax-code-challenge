// lib
import React from 'react'
import {storiesOf} from '@storybook/react'
// components
import Input from '.'
import {Layout, Row, Column} from '../layout'

function clickHandler() {
  alert('Clicked!')
}

storiesOf('Input', module)
  .add('Default', () => (
    <Input name="my-input" type="text" placeholder="type stuff here..." />
  ))

  .add('Required', () => (
    <Input name="my-input" type="text" placeholder="type stuff here..." required />
  ))

  .add('Pattern, Required', () => (
    <Input name="my-input" type="text" label="First Name" placeholder="John Smith" pattern="[0-9]{3}" required />
  ))

  .add('Label', () => (
    <Input name="my-input" type="text" placeholder="type stuff here..." label="First Name" />
  ))

  .add('Label, Required', () => (
    <Input name="my-input" type="text" label="First Name" placeholder="John Smith" required />
  ))

  .add('Icon', () => (
    <Input name="my-input" type="text" icon="account_circle" placeholder="type stuff here..." />
  ))

  .add('Password', () => (
    <Input name="my-input" type="password" placeholder="Please enter your password." />
  ))
