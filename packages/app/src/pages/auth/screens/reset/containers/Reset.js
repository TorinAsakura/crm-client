import { connect } from 'react-redux'
import { change, reset } from '../actions'
import Reset from '../components/Reset'

export default connect(
  state => ({
    password: state.auth.reset.password,
    confirmation: state.auth.reset.confirmation,
    errors: state.auth.reset.errors,
  }),
  (dispatch, { match }) => ({
    onChangePassword: value => dispatch(change('password', value)),
    onChangeConfirmation: value => dispatch(change('confirmation', value)),
    onReset: () => dispatch(reset(match.params.token)),
  }),
)(Reset)
