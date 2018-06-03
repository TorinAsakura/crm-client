import { createReducer } from '@bloom/utils'
import * as actions from '../constants/remote'

const initialState = {
  pool: [],
  percent: 0,
}

export default createReducer(initialState, {
  [actions.start]: (state, { action }) => ({
    pool: state.pool.concat([action]),
    percent: 20,
  }),
  [actions.end]: (state, { action }) => {
    const pool = state.pool.filter(item => item !== action)
    const percent = pool.length === 0 ? 100 : state.percent

    return { pool, percent }
  },
})
