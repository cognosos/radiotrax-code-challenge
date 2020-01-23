// lib
import React from 'react'
import {storiesOf, addParameters} from '@storybook/react'
// components
import RadioGroup from '.'

storiesOf('Radio Group', module)
  .add('Default', () => (
    <RadioGroup items={[{
      label: 'One',
      value: 1
    }, {
      label: 'Two',
      value: 2
    }, {
      label: 'Three',
      value: 3
    }]} />
  ))
