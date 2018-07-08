import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Block from './Block'

const Page = ({ children }) => (
  <Row>
    <Layout basis='40px' />
    <Layout shrink={1} grow={1}>
      <Column>
        <Layout basis='40px' />
        <Layout>
          <Block>
            <Row>
              <Layout basis='56px' />
              <Layout shrink={1} grow={1}>
                <Column>
                  <Layout basis='40px' />
                  <Layout>
                    {children}
                  </Layout>
                  <Layout basis='56px' />
                </Column>
              </Layout>
              <Layout basis='56px' />
            </Row>
          </Block>
        </Layout>
        <Layout basis='30px' />
      </Column>
    </Layout>
    <Layout basis='40px' />
  </Row>
)

export default Page
