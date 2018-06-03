import { connect } from 'react-redux'
import { Progress } from '@bloom/ui/src/progress'

export default connect(
  state => ({
    absolute: true,
    percent: state.remote.percent,
  }),
)(Progress)
