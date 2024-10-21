import { apiSlice } from '../apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    getCart: builder.query({
      query: () => ({
        url: '/user/cart',
        method: 'GET',
      }),
    }),
    postCart: builder.mutation({
      query: (data) => ({
        url: '/user/cart',
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

export const { useGetCartQuery , usePostCartMutation, useLogOutMutation } =
  authApiSlice
