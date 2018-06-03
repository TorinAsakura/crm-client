import { createReducer } from '@bloom/utils'

const initialState = {
  apiUrl: process.env.API_URL || 'http://localhost:3000',
}

export default createReducer(initialState, {})
