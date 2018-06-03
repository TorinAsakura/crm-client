import gql from 'graphql-tag'
import { auth } from '../../../../../actions/security'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const login = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.login

  const { data } = await client.query({
    query: gql`
      query Signin($email: String!, $password: String!){
        signin(email: $email, password: $password) {
          token {
            email
            token
            expiresIn
          }
          errors {
            email
          }
        }
      }
    `,
    variables: {
      email,
      password,
    },
  })

  if (data.signin.token) {
    dispatch(auth(data.signin.token))
  } else {
    dispatch({
      type: actions.setErrors,
      errors: data.signin.errors,
    })
  }
}
