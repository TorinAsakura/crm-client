import { connect } from 'react-redux'
import { create } from '../../actions/roles'
import Detail from '../../components/roles/Detail'

export default connect(
  state => ({
    
  }),
  dispatch => ({
    onCreate: () => dispatch(create()),
  }),
)(Detail)
