// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react'

import { RootState, store } from './store'
import { updateAccessToken } from './reducers/AccessTokenSlice'
import { jwtDecode } from 'jwt-decode'
import { QueryReturnValue } from '@reduxjs/toolkit/query/react'

// TODO: get baseUrl from .env
const baseUrl = 'https://petstore3.swagger.io/api/v3'

const baseQuery = fetchBaseQuery({
  baseUrl,

  prepareHeaders: (headers, { getState, type, endpoint, extra }) => {
    // this method should retrieve the token without a hook

    const state = getState() as RootState
    const token = state.accessToken?.value

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    if (
      endpoint.includes('patch') ||
      (endpoint.includes('Patch') && 'mutation' === type)
    ) {
      headers.set('content-type', 'application/merge-patch+json')
    } else if (
      (endpoint.includes('post') || endpoint.includes('put')) &&
      'mutation' === type
    ) {
      headers.set('content-type', 'application/json')
    }

    return headers
  },
})

const refreshBaseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState, type, endpoint, extra }) => {
    // this method should retrieve the token without a hook
    const state = getState() as RootState
    const token = state.accessToken?.value
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    if (
      endpoint.includes('patch') ||
      (endpoint.includes('Patch') && 'mutation' === type)
    ) {
      headers.set('content-type', 'application/merge-patch+json')
    } else if (
      (endpoint.includes('post') || endpoint.includes('put')) &&
      'mutation' === type
    ) {
      headers.set('content-type', 'application/json')
    }

    return headers
  },
})

export default function decodeToken(token: string) {
  let decoded = {}
  try {
    decoded = jwtDecode(token)
  } catch (err) {
    store.dispatch(updateAccessToken(''))

    //store.dispatch(updateProfileData(null))

    decoded = {}
  }
  return decoded
}

const validateToken = (token: string) => {
  try {
    const jwtPayload = JSON.parse(
      window.atob(token.split('.')[1] as string as string),
    )
    const isExpired = Date.now() >= jwtPayload.exp * 1000

    //todo: replace this
    return {
      token,
      isValid: true,
      isExpired: false,
    }
  } catch (e) {
    console.log("it's an attack!!!")
    return {
      isValid: false,
      isExpired: true,
    }
  }
}

const forceDisconnectUser = () => {
  store.dispatch(updateAccessToken(''))

  // Router.push(PAGES.AUTHENTICATION.LOGIN).then(r => {})
}

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  const state = api.getState() as RootState
  const token = state.accessToken?.value

  const accessToken = state.accessToken?.value as string

  // decodeToken(accessToken);

  if ('' !== accessToken) {
    // const tokenStatus = validateToken("test");

    // api.dispatch(updateAccessToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyYTFkNDc2ZC1mNGFkLTQwZDctYjJiNy0wOTI0ZmJkZTUwN2MiLCJwaG9uZU51bWJlciI6bnVsbCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTcwOTYzNDg4MCwiZXhwIjoxMDB9.iDMnPnvtURXTpPOvV6FYRYu93Fl7G2x-6pi3889H-nk"));
    //  const tokenStatus =  validateToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyYTFkNDc2ZC1mNGFkLTQwZDctYjJiNy0wOTI0ZmJkZTUwN2MiLCJwaG9uZU51bWJlciI6bnVsbCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTcwOTYzNDg4MCwiZXhwIjoxMDB9.iDMnPnvtURXTpPOvV6FYRYu93Fl7G2x-6pi3889H-nk");

    // todo: handle this
    //const tokenStatus = validateToken(accessToken)
    const tokenStatus = {
      token: accessToken,
      isValid: true,
      isExpired: false,
    }
    // const tokenStatus = {
    //   token: accessToken,
    //   isValid: true,
    //   isExpired: false
    // }

    console.log({
      tokenStatus,
    })

    if (tokenStatus.isValid) {
      // continue to check refresh

      if (result.error && result.error.status === 401) {
        const data = result.error.data as {
          message: string
          statusCode: number
        }

        if (401 === data.statusCode) {
          if (tokenStatus.isExpired) {
            console.log('Token expired!!!!! refetching....')

            //const apiState = api.getState() as any
            //const refreshToken = apiState.refreshToken.refreshToken

            // try to get a new token
            const refreshResult: QueryReturnValue<
              unknown,
              FetchBaseQueryError,
              FetchBaseQueryMeta
            > = await refreshBaseQuery(
              {
                url: `api/v1/auth/refresh_tokens`,
                method: 'POST',
              },
              api,
              extraOptions,
            )

            if (refreshResult.data) {
              console.log({
                refreshResult,
              })
              // store the new token in the store or wherever you keep it

              const dataToken = refreshResult.data as {
                access_token: string
                refresh_token: string
              }

              api.dispatch(updateAccessToken(dataToken.access_token))

              // retry the initial query
              result = await baseQuery(args, api, extraOptions)
            } else {
              // refresh failed - do something like redirect to login or show a "retry" button
              forceDisconnectUser()
            }
          }
        }
      }
    } else {
      forceDisconnectUser()
    }
  }

  // if (result.error && result.error.status === 404) {
  //   __showReportNotification('error', "Une erreur est survenue. Veuillez réessayer ultérieurement" )
  // }

  return result
}

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  // baseQuery: fetchBaseQuery({
  //     prepareHeaders: (headers, { getState }) => {
  //         const token = (getState() as RootState).accessToken.value
  //         if (token) headers.set('authorization', `Bearer ${token}`)
  //         return headers
  //     },
  //     baseUrl: process.env.BASE_URL
  // }),

  reducerPath: 'rootAPI',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})

export interface IHeaders extends Headers {
  set: any
}
