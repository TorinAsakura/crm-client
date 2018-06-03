import { createReducer } from '@bloom/utils'
import * as actions from '../constants'

const initialState = {
  email: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { email }) => ({ ...state, email }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
  [actions.clear]: () => initialState,
})
