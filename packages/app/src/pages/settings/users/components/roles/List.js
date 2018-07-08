import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Button } from '@bloom/ui/src/button'
import { Page } from '@bloom/ui/src/content'
import { Link, TabNavLink } from '@bloom/ui/src/link'
import { Block } from '@bloom/ui/src/content'
import { Text } from '@bloom/ui/src/text'
import { Grid, Column as GridColumn } from '@bloom/ui/src/grid'

const messages = defineMessages({
  users: {
    id: 'settings.users.users',
    defaultMessage: 'Users',
  },
  newRole: {
    id: 'settings.users.new_role',
    defaultMessage: 'New Role',
  },
  roles: {
    id: 'settings.users.roles',
    defaultMessage: 'Roles',
  },
})

const List = ({ intl, rows = [{ id: 1, name: 'ADMIN_MANAGER', createdAt: new Date(), updatedAt: new Date() }] }) => (
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
            <Link to='/settings/users/roles/new'>
              <Button
                size='small'
                type='transparent'
              >
                {intl.formatMessage(messages.newRole)}
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
      <Layout>
        <Block>
          <div style={{ height: 200 }}>
          <Grid
            data={rows}
          >
            <GridColumn
              name='name'
              basis='50%'
              title='Role'
            />
            <GridColumn
              name='createdAt'
              basis='25%'
              title='Created'
              renderer={({ createdAt }) => intl.formatDate(createdAt)}
            />
            <GridColumn
              name='updatedAt'
              basis='25%'
              title='Updated'
              renderer={({ updatedAt }) => intl.formatDate(updatedAt)}
            />
          </Grid>
          </div>
        </Block>
      </Layout>
    </Column>
  </Page>
)

export default injectIntl(List)
