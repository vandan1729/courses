import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true
      state.accessToken = action.payload || ''
    },
    logout(state) {
      state.isAuthenticated = false
      state.accessToken = ''
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload || ''
    },
  },
})

export const { login, logout, setRefreshToken } = authSlice.actions
export default authSlice.reducer
