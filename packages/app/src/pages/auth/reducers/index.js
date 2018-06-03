import { combineReducers } from 'redux'
import login from '../screens/login/reducers'
import reset from '../screens/reset/reducers'
import restore from '../screens/restore/reducers'

export default combineReducers({
  login,
  reset,
  restore,
})
