import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    loginVisible: false,
    signUpVisible: false,
    cartVisible: false,
    opacityValue: false,
  },
  reducers: {
    setLoginVisible: (state, action) => {
      state.loginVisible = action.payload
    },
    setSignUpVisible: (state, action) => {
      state.signUpVisible = action.payload
    },
    setCartVisible: (state, action) => {
      state.cartVisible = action.payload
    },
    setOpacityValue: (state, action) => {
      state.opacityValue = action.payload
    },
  },
})

export const {
  setLoginVisible,
  setSignUpVisible,
  setCartVisible,
  setOpacityValue,
} = modalSlice.actions
export default modalSlice.reducer
