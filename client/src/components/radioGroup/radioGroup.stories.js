// lib
import React from 'react'
import {storiesOf} from '@storybook/react'
// components
import RadioGroup from '.'

const items = [
  {label: 'One', value: 1},
  {label: 'Two', value: 1},
  {label: 'One', value: 1}
]

storiesOf('Radio Group', module)
  .add('Default', () => (
    <RadioGroup items={items} />
  ))

  .add('Label', () => (
    <RadioGroup label="My Options" items={items} />
  ))

  .add('Label Inline', () => (
    <RadioGroup inline={true} label="My Options" items={items} />
  ))
