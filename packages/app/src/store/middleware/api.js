import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { start, end } from '../../actions/remote'
import { logout } from '../../actions/security'

export default history => ({ dispatch, getState }) => {
  const progressLink = new ApolloLink((operation, forward) => {
    const id = Date.now()

    dispatch(start(id))

    return forward(operation).map((result) => {
      dispatch(end(id))

      return result
    })
  })

  const httpLink = createHttpLink({
    uri: getState().config.apiUrl,
  })

  const middlewareLink = setContext(() => {
    if (!!getState().security.token) { // eslint-disable-line no-extra-boolean-cast
      return {
        headers: {
          authorization: getState().security.token || null,
          'Accept-Language': getState().locale.locale,
        },
      }
    }

    return {
      headers: {
        'Accept-Language': getState().locale.locale,
      },
    }
  })

  const errorLink = onError(({ graphQLErrors = [] }) => {
    if (graphQLErrors.some(error => error.message === 'Unauthorized')) {
      dispatch(logout())
    }
  })

  const link = ApolloLink.from([
    progressLink,
    middlewareLink,
    errorLink,
    httpLink,
  ])

  const client = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link,
  })

  return next => (action) => {
    if (typeof action === 'function') {
      action(dispatch, getState, client, history)
    } else {
      next(action)
    }
  }
}
