// lib
import React from 'react'
import {storiesOf} from '@storybook/react'
// components
import Meter from '.'

storiesOf('Meter', module)
  .add('Empty', () => (
    <Meter level={0} />
  ))

  .add('Partial', () => (
    <Meter level={0.15} />
  ))

  .add('Half', () => (
    <Meter level={0.5} />
  ))

  .add('Full', () => (
    <Meter level={1} />
  ))

  .add('Icon', () => (
    <Meter level={0} icon="battery_charging_full" />
  ))

  .add('Complex', () => (
    <Meter
      level={0.35}
      icon="wb_sunny"
      label={`35°`}
      lowColor="blue" mediumColor="purple" highColor="red"
      lowThreshold="40%" mediumThreshold="60%"
    />
  ))
