import React from 'react'
import { withRouter } from 'react-router-dom'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Page } from '@bloom/ui/src/content'
import { Text } from '@bloom/ui/src/text'
import { Input } from '@bloom/ui/src/input'
import { TabNavLink } from '@bloom/ui/src/link'
import { Button } from '@bloom/ui/src/button'

const messages = defineMessages({
  newRole: {
    id: 'settings.users.roles.new_role',
    defaultMessage: 'New Role',
  },
  editRole: {
    id: 'settings.users.roles.edit_role',
    defaultMessage: 'Edit Role',
  },
  roleName: {
    id: 'settings.users.roles.role_name',
    defaultMessage: 'Role Name',
  },
  pagePermissions: {
    id: 'settings.users.roles.page_permissions',
    defaultMessage: 'Page Permissions',
  },
  specificPermissions: {
    id: 'settings.users.roles.specific_permissions',
    defaultMessage: 'Specific Permissions',
  },
})

const Detail = ({ intl, match, children, onCreate }) => (
  <Page>
    <Column>
      <Layout>
        <Text
          weight='bold'
          size='xlarge'
        >
          {intl.formatMessage(messages.newRole)}
        </Text>
      </Layout>
      <Layout basis='50px' />
      <Layout>
        <Text>
          {intl.formatMessage(messages.roleName)}
        </Text>
      </Layout>
      <Layout basis='24px' />
      <Layout>
        <Row>
          <Layout basis='270px'>
            <Input
              size='small'
            />
          </Layout>
        </Row>
      </Layout>
      <Layout basis='56px' />
      <Layout>
        <Row>
          <Layout>
            <TabNavLink exact to={`/settings/users/roles/${match.params.id}`}>
              {intl.formatMessage(messages.pagePermissions)}
            </TabNavLink>
          </Layout>
          <Layout>
            <TabNavLink exact to={`/settings/users/roles/${match.params.id}/specific-permissions`}>
              {intl.formatMessage(messages.specificPermissions)}
            </TabNavLink>
          </Layout>
        </Row>
      </Layout>
      <Layout>
        {children}
      </Layout>
      <Layout basis='56px' />
      <Layout>
        <Row>
          <Layout shrink={1} grow={1} />
          <Layout basis='240px'>
            <Button fill>
              Cancel
            </Button>
          </Layout>
          <Layout basis='56px' />
          <Layout basis='240px'>
            <Button
              fill
              onClick={onCreate}
            >
              Create Role
            </Button>
          </Layout>
        </Row>
      </Layout>
    </Column>
  </Page>
)

export default withRouter(injectIntl(Detail))
