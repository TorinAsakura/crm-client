import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Toolbar from '../components/Toolbar'

export default withRouter(connect()(Toolbar))
