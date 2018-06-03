import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { Toolbar as BaseToolbar, Item } from '@bloom/ui/src/toolbar'

const messages = defineMessages({
  dashboard: {
    id: 'toolbar.dashboard',
    defaultMessage: 'Dashboard',
  },
})

const Toolbar = ({ intl }) => (
  <BaseToolbar>
    <Column>
      <Layout basis='16px' />
      <Layout>
        <Item exact to='/'>
          {intl.formatMessage(messages.dashboard)}
        </Item>
      </Layout>
    </Column>
  </BaseToolbar>
)

export default injectIntl(Toolbar)
