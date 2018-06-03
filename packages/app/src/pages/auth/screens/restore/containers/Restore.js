import { connect } from 'react-redux'
import { change, restore } from '../actions'
import Restore from '../components/Restore'

export default connect(
  state => ({
    email: state.auth.restore.email,
    errors: state.auth.restore.errors,
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change(value)),
    onRestore: () => dispatch(restore()),
  }),
)(Restore)
