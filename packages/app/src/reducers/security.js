import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { createReducer } from '@bloom/utils'
import * as actions from '../constants/security'

const initialState = {
  token: '',
  email: '',
  expiresIn: '',
}

const reducer = createReducer(initialState, {
  [actions.auth]: (state, { token, email, expiresIn }) => ({
    token,
    email,
    expiresIn,
  }),
  [actions.logout]: () => initialState,
})

export default persistReducer({
  storage,
  key: 'token',
  keyPrefix: 'c3',
  version: 1,
}, reducer)
