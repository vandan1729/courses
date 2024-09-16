import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    loginVisible: false,
    signUpVisible: false,
    cartVisible: false,
    opacityValue: false,
    showSuccess: false,
    promptDialogBox: false,
    primaryLoading: false,
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
    showSuccess: (state, action) => {
      state.showSuccess = action.payload
    },
    promptDialogBox: (state, action) => {
      state.promptDialogBox = action.payload
    },
    setPrimaryLoading: (state, action) => {
      state.primaryLoading = action.payload
    },
  },
})

export const {
  setLoginVisible,
  setSignUpVisible,
  setCartVisible,
  setOpacityValue,
  showSuccess,
  promptDialogBox,
  setPrimaryLoading,
} = modalSlice.actions
export default modalSlice.reducer
