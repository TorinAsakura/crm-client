import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createReducer } from '@bloom/utils'
import * as actions from '../constants/user'

const initialState = {
  id: '',
  email: '',
}

const reducer = createReducer(initialState, {
  [actions.load]: (state, { user }) => user,
})

export default persistReducer({
  storage,
  key: 'user',
  keyPrefix: 'bloom',
  version: 1,
}, reducer)
