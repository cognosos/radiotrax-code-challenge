// lib
import React from 'react'
import {storiesOf} from '@storybook/react'
// components
import Select from '.'

function changeHandler(e, value) {
  alert(`Changed to: ${value}!`)
}

const options = [
  {label: 'Leo Johnson', value: 'leo'},
  {label: 'Leland Palmer', value: 'leland'},
  {label: 'Bobby Briggs', value: 'bobby'}
]

storiesOf('Select', module)
  .add('Default', () => (
    <Select options={options} />
  ))

  .add('Label', () => (
    <Select label="Who killed Laura Palmer?" options={options} />
  ))

  .add('Label Inline', () => (
    <Select label="Who killed Laura Palmer?" inline={true} options={options} />
  ))

  .add('Events', () => (
    <Select onChange={changeHandler} options={options} />
  ))
