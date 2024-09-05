// src/redux/features/paymentSlice.js
import { createSlice } from '@reduxjs/toolkit'

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    cardNumber: '1212 1111 1111 1111',
    expiryDate: '24/24',
    cvc: '',
    cardNumberValid: false,
    expiryDateValid: false,
    cvcValid: false,
  },
  reducers: {
    setCardNumber(state, action) {
      state.cardNumber = action.payload
    },
    setExpiryDate(state, action) {
      state.expiryDate = action.payload
    },
    setCvc(state, action) {
      state.cvc = action.payload
    },
    setCardNumberValid(state, action) {
      state.cardNumberValid = action.payload
    },
    setExpiryDateValid(state, action) {
      state.expiryDateValid = action.payload
    },
    setCvcValid(state, action) {
      state.cvcValid = action.payload
    },
  },
})

export const {
  setPaymentMethod,
  setCardNumber,
  setExpiryDate,
  setCvc,
  setCardNumberValid,
  setExpiryDateValid,
  setCvcValid,
} = paymentSlice.actions

export default paymentSlice.reducer
