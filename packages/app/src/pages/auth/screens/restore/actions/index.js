import gql from 'graphql-tag'
import * as actions from '../constants'

export const change = email => ({
  type: actions.change,
  email,
})

export const restore = () => async (dispatch, getState, client, history) => {
  const { email } = getState().auth.restore

  const { data } = await client.mutate({
    mutation: gql`
      mutation RestorePassword($email: String!) {
        restorePassword(email: $email) {
          errors {
            email
          }
        }
      }
    `,
    variables: {
      email,
    },
  })

  if (data.restorePassword.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.restorePassword.errors,
    })
  } else {
    history.push('/auth/restore/success')

    dispatch({ type: actions.clear })
  }
}
