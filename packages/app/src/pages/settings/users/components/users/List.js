import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Button } from '@bloom/ui/src/button'
import { Page } from '@bloom/ui/src/content'
import { Link, TabNavLink } from '@bloom/ui/src/link'
import { Text } from '@bloom/ui/src/text'

const messages = defineMessages({
  users: {
    id: 'settings.users.users',
    defaultMessage: 'Users',
  },
  newUser: {
    id: 'settings.users.new_user',
    defaultMessage: 'New User',
  },
  roles: {
    id: 'settings.users.roles',
    defaultMessage: 'Roles',
  },
})

const List = ({ intl }) => (
  <Page>
    <Column>
      <Layout>
        <Row>
          <Layout>
            <Text
              weight='bold'
              size='xlarge'
            >
              {intl.formatMessage(messages.users)}
            </Text>
          </Layout>
          <Layout shrink={1} grow={1} />
          <Layout>
            <Link to='/settings/users/new'>
              <Button
                size='small'
                type='transparent'
              >
                {intl.formatMessage(messages.newUser)}
              </Button>
            </Link>
          </Layout>
        </Row>
      </Layout>
      <Layout basis='40px' />
      <Layout>
        <Row>
          <Layout>
            <TabNavLink exact to='/settings/users'>
              {intl.formatMessage(messages.users)}
            </TabNavLink>
          </Layout>
          <Layout>
            <TabNavLink exact to='/settings/users/roles'>
              {intl.formatMessage(messages.roles)}
            </TabNavLink>
          </Layout>
        </Row>
      </Layout>
    </Column>
  </Page>
)

export default injectIntl(List)
