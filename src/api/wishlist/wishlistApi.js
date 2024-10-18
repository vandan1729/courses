import { apiSlice } from '../apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    getWishlist: builder.query({
      query: () => ({
        url: '/user/wishlist/',
        method: 'GET',
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

export const { useGetWishlistQuery , useLoginMutation, useLogOutMutation } =
  authApiSlice
