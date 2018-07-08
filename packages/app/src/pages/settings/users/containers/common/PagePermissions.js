import { connect } from 'react-redux'
import { createTreeActions } from '@bloom/utils'
import PagePermissions from '../../components/common/PagePermissions'

const { toggle, select } = createTreeActions('roles')

export default connect(
  state => ({
    rows: state.users.roles.permissions.page,
  }),
  dispatch => ({
    onToggle: id => dispatch(toggle(id)),
    onSelect: id => dispatch(select(id)),
  }),
)(PagePermissions)
