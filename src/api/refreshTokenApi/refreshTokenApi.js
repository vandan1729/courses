import { apiSlice } from '../apiSlice'

export const refreshAccessToken = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    refreshToken: builder.mutation({
      query: (token) => ({
        url: '/refresh-token',
        method: 'POST',
        data: user,
        headers: token,
      }),
    }),
  }),
})

export const { useRefreshTokenMutation } = refreshAccessToken
