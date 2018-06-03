import gql from 'graphql-tag'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const reset = (token = '') => async (dispatch, getState, client, history) => {
  const { password, confirmation } = getState().auth.reset

  const { data } = await client.mutate({
    mutation: gql`
      mutation ResetPassword($token: String!, $password: String!, $confirmation: String!) {
        resetPassword(token: $token, password: $password, confirmation: $confirmation){
          errors {
            token
            password
            confirmation
          }
        }
      }
    `,
    variables: {
      token,
      password,
      confirmation,
    },
  })

  if (data.resetPassword.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.resetPassword.errors,
    })
  } else {
    history.push('/auth/reset/success')

    dispatch({ type: actions.clear })
  }
}
