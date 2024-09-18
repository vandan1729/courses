import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { login, setRefreshToken } from '../redux/features/authSlice'

export const ApiCall = () => {
  const dispatch = useDispatch()
  const refreshToken = useSelector((state) => state.auth.refreshToken)

  const userAuth = async ({ data, api, headers }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_USER_AUTH_URL}/${api}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        },
      )
      return response
    } catch (error) {
      console.error('Error in userAuth:', error)
      throw error
    }
  }

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_USER_AUTH_URL}/refresh-token`,
        {
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        },
      )
      document.cookie = `accessToken=${response.data.access_token}; path=/;`
      dispatch(login(response.data.access_token))
      if (response.data.refresh_token) {
        document.cookie = `refreshToken=${response.data.refresh_token}; path=/;`
        dispatch(setRefreshToken(response.data.refresh_token))
      }
      return response.data.access_token
    } catch (error) {
      console.error('Failed to refresh access token', error)
      return null
    }
  }

  return { userAuth, refreshAccessToken }
}
