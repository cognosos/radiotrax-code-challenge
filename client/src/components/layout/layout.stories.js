// lib
import React from 'react'
import {storiesOf} from '@storybook/react'
// components
import {Layout, Row, Column} from '.'

storiesOf('Layout', module)
  .add('Default', () => (
    <Layout>
      <Row>
        <Column>
          ONE
        </Column>
        <Column>
          TWO
        </Column>
      </Row>
      <Row>
        <Column span={4}>
          TREE
        </Column>
        <Column>
          FOUR
        </Column>
      </Row>
    </Layout>
  ))
