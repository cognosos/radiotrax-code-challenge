// lib
import React from 'react'
import {storiesOf, addParameters} from '@storybook/react'
// components
import Collection from '.'
import Icon from '../icon'

storiesOf('Collection', module)
  .add('Default', () => (
    <Collection items={[{
      title: 'Item #1',
      description: 'I must create a system, or be enslaved by another man\'s...',
      actions: [<Icon type="grade" />]
    }, {
      title: 'Item #2',
      actions: [<Icon type="flash_on" />]
    }]} />
  ))
