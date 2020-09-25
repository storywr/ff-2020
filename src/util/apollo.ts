import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache,  } from '@apollo/client'
import { onError } from '@apollo/link-error'

import debug from '@/util/debug'
import ls, { ACCESS_TOKEN, REFRESH_TOKEN } from '@/util/localstore'

import Config from '@/config'

export const APP_VERSION_HEADER = 'x-app-version'
export const AUTH_HEADER = 'authorization'
export const NEW_TOKEN_HEADER = 'x-refreshed-token'
export const PLATFORM_HEADER = 'x-platform'
export const REFRESH_HEADER = 'x-refresh'
export const REQUEST_ID_HEADER = 'x-request-id'

const appVersion = `${Config.BUILD_VERSION}-${Config.BUILD_COMMIT.substring(0, 7)}`

const authMiddleware = new ApolloLink((operation, forward) => {
  const customHeaders: Record<string, string> = {
    [APP_VERSION_HEADER]: appVersion,
    [PLATFORM_HEADER]: 'spout-admin'
  }

  const accessToken = ls.get(ACCESS_TOKEN)
  if (accessToken) customHeaders[AUTH_HEADER] = accessToken

  const refreshToken = ls.get(REFRESH_TOKEN)
  if (refreshToken) customHeaders[REFRESH_HEADER] = refreshToken

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      ...customHeaders
    }
  }))

  return forward(operation)
})

const httpLink = new HttpLink({
  uri: Config.GRAPHQL_URL
})

const tokenRefreshLink = new ApolloLink((operation, forward) => (
  forward(operation).map((response) => {
    const { response: { headers } } = operation.getContext()
    const newToken = headers.get(NEW_TOKEN_HEADER)

    if (newToken) ls.set(ACCESS_TOKEN, newToken)

    return response
  })
))

const serverErrorLink = onError(({ networkError }) => {
  if (networkError) {
    debug.error('[apollo]', '(serverErrorLink)', networkError)
  }
})

const loggerLink = new ApolloLink((operation, forward) => (
  forward(operation).map((response) => {
    const context = operation.getContext()
    const requestId = context.response.headers.get(REQUEST_ID_HEADER)

    debug.log(`[apollo]', '(${requestId})`, { context, operation, response })

    return response
  })
))

const httpLinkWithMiddleware = loggerLink.concat(
  serverErrorLink.concat(
    tokenRefreshLink.concat(httpLink)
  )
)

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    authMiddleware,
    httpLinkWithMiddleware
  ]),
  resolvers: {}
})
