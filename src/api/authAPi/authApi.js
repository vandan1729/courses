import { apiSlice } from '../apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: '/user/auth/register',
        method: 'POST',
        data: user,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/user/auth/login',
        method: 'POST',
        data,
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: '/user/auth/logout',
        method: 'POST',
      }),
    }),
  }),
})

export const { useRegisterUserMutation, useLoginMutation, useLogOutMutation } =
  authApiSlice
