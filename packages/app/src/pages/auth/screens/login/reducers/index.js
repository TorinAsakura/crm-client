import { createReducer } from '@bloom/utils'
import * as actions from '../constants'

const initialState = {
  email: '',
  password: '',
  error: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
  [actions.clear]: () => initialState,
})
