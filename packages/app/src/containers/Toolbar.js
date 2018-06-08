import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggle } from '../actions/toolbar'
import Toolbar from '../components/Toolbar'

export default withRouter(connect(
  state => ({
    minimized: state.toolbar.minimized,
  }),
  dispatch => ({
    onToggle: () => dispatch(toggle()),
  }),
)(Toolbar))
