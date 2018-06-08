import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Progress } from '@bloom/ui/src/progress'
import { Logo } from '@bloom/ui/src/logo'
import { Block } from '@bloom/ui/src/content'
import Bloom from './Bloom'

const App = ({
  progress,
  children,
}) => (
  <Row fill>
    <Layout>
      <Progress
        absolute
        percent={progress}
      />
    </Layout>
    <Layout basis='608px'>
      <Block>
        <Row fill>
          <Layout shrink={1} grow={1} />
          <Layout basis='360px'>
            <Column fill>
              <Layout basis='160px' />
              <Layout justify='center'>
                <Logo height={48} />
              </Layout>
              <Layout basis='80px' />
              <Layout>
                {children}
              </Layout>
            </Column>
          </Layout>
          <Layout shrink={1} grow={1} />
        </Row>
      </Block>
    </Layout>
    <Layout shrink={1} grow={1}>
      <Bloom />
    </Layout>
  </Row>
)

export default App
