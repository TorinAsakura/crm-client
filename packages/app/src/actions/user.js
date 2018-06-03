import gql from 'graphql-tag'
import * as actions from '../constants/user'

export const load = () => async (dispatch, getState, client) => {
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
    type: actions.load,
    user: data.me,
  })
}
