import * as actions from '../constants/remote'

export const start = action => ({ type: actions.start, action })

export const end = action =>
  dispatch =>
    setTimeout(() => {
      dispatch({ type: actions.end, action })
    }, 400)
