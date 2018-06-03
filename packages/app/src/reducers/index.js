import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import config from './config'
import messages from './messages'
import user from './user'
import remote from './remote'
import security from './security'
import locale from './locale'
import auth from '../pages/auth/reducers'

export default combineReducers({
  router,
  security,
  config,
  messages,
  user,
  remote,
  locale,
  auth,
})
