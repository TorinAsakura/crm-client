export const createReducer = (initialState, reducers = {}) => (state = initialState, { type, ...payload }) => {
  const handler = reducers[type]
  const newState = handler ? handler(state, payload) : state

  return newState
}
