import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { createReducer } from '@bloom/utils'
import * as actions from '../constants/toolbar'

const initialState = {
  minimized: false,
}

const reducer = createReducer(initialState, {
  [actions.toggle]: state => ({
    minimized: !state.minimized,
  }),
})

export default persistReducer({
  storage,
  key: 'toolbar',
  keyPrefix: 'bloom',
  version: 1,
}, reducer)
