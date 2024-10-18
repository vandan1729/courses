import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import Cookies from 'js-cookie'

// Custom Axios-based base query function with a fixed base URL
const axiosBaseQuery = async ({ url, method, data, params, headers }) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL

  const cookieValue = Cookies.get('accessToken')

  try {
    const result = await axios({
      url: baseUrl + url,
      method,
      params,
      data,
      headers: {
        ...headers,
        Authorization: `Bearer ${cookieValue}`,
      },
    })
    return { data: result.data }
  } catch (axiosError) {
    let err = axiosError
    return {
      error: {
        status: err.response?.status || 'FETCH_ERROR',
        data: err.response?.data || err.message,
      },
    }
  }
}

// Create the base API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({}),
})
