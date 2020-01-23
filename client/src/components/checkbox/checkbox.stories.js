// lib
import React from 'react'
import {storiesOf, addParameters} from '@storybook/react'
// components
import Checkbox from '.'

storiesOf('Checkbox', module)
  .add('Default', () => (
    <Checkbox name="submit-checkbox-inline" label="toggle me" />
  ))
