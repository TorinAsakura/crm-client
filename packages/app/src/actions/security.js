import * as actions from '../constants/security'

export const auth = ({ email, token, expiresIn }) => ({
  type: actions.auth,
  email,
  token,
  expiresIn,
})

export const logout = () => ({
  type: actions.logout,
})
