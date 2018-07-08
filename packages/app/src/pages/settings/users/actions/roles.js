//import * as actions from '../constants/remote'

export const create = () => async (dispatch, getState) => {
  const { page } = getState().users.roles.permissions

  console.log(page)
}
