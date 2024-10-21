import { apiSlice } from '../apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    getWishlist: builder.query({
      query: () => ({
        url: '/user/wishlist',
        method: 'GET',
      }),
    }),
    getWishlist: builder.mutation({
      query: (data) => ({
        url: '/user/wishlist',
        method: 'POST',
        data,
      }),
    }),
  }),
})

export const { useGetWishlistQuery , usePostWishlistMutation } =
  authApiSlice
