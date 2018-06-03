import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Header as BaseHeader } from '@bloom/ui/src/header'
import { Link } from '@bloom/ui/src/link'
import { Logo } from '@bloom/ui/src/logo'

const Header = () => (
  <BaseHeader>
    <Column>
      <Layout basis='25px' />
      <Layout>
        <Row align='center'>
          <Layout basis='16px' />
          <Layout >
            <Link plain to='/'>
              <Logo
                height={28}
              />
            </Link>
          </Layout>
          <Layout basis='24px' />
          <Layout basis='26px' />
          <Layout basis='16px' />
        </Row>
      </Layout>
      <Layout basis='25px' />
    </Column>
  </BaseHeader>
)

export default injectIntl(Header)
