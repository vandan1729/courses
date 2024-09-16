import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  accessToken: '',
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
    setAccessToken(state, action) {
      state.accessToken = action.payload || ''
    },
  },
})

export const { login, logout, setAccessToken } = authSlice.actions
export default authSlice.reducer
