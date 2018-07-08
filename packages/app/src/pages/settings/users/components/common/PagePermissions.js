import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Button } from '@bloom/ui/src/button'
import { Page } from '@bloom/ui/src/content'
import { Link, TabNavLink } from '@bloom/ui/src/link'
import { Checkbox } from '@bloom/ui/src/checkbox'
import { Block } from '@bloom/ui/src/content'
import { Text } from '@bloom/ui/src/text'
import { TreeGrid, TreeLevel, NodeExpander, Column as GridColumn } from '@bloom/ui/src/grid'

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

const PagePermissions = ({ intl, rows = [], onToggle, onSelect }) => (
  <TreeGrid
    data={rows}
  >
    <GridColumn
      basis='100%'
      title={false}
      renderer={({ id, name, children, expanded, selected, partialSelected }, { level }) => (
        <Row align='center'>
          <Layout>
            <TreeLevel level={level} />
          </Layout>
          <Layout basis='36px'>
            {children
              ? <NodeExpander expanded={expanded} onClick={() => onToggle(id)} />
              : null}
          </Layout>
          <Layout basis='36px'>
            <Checkbox
              style={partialSelected ? 'radio' : 'check'}
              value={selected || partialSelected}
              onChange={() => onSelect(id)}
            />
          </Layout>
          <Layout>
            {name}
          </Layout>
        </Row>
      )}
    />
  </TreeGrid>
)

export default injectIntl(PagePermissions)
