import gql from 'graphql-tag'
import { load as loadUser } from '../constants/user'

export const init = () => async (dispatch, getState, client) => {
  const { data } = await client.query({
    query: gql`
      query {
        me {
          id
          email
        }
      }
    `,
  })

  dispatch({
    type: loadUser,
    user: data.me,
  })
}
