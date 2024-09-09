import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    cards: [
      {
        id: 1,
        cardNumber: '1234 5678 9012 3456',
        expiryDate: '12/24',
      },
      {
        id: 2,
        cardNumber: '9876 5432 1098 7654',
        expiryDate: '11/25',
      },
    ], // Sample cards
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    cardNumberValid: false,
    expiryDateValid: false,
    cvcValid: false,
  },
  reducers: {
    addCard(state, action) {
      const newCard = { id: uuidv4(), ...action.payload }
      state.cards.push(newCard)
    },
    updateCard(state, action) {
      const { id, cardData } = action.payload
      const cardIndex = state.cards.findIndex((card) => card.id === id)
      if (cardIndex !== -1) {
        state.cards[cardIndex] = { ...state.cards[cardIndex], ...cardData }
      }
    },
    removeCard(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id)
    },
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
  addCard,
  updateCard,
  removeCard,
  setCardNumber,
  setExpiryDate,
  setCvc,
  setCardNumberValid,
  setExpiryDateValid,
  setCvcValid,
} = paymentSlice.actions

export default paymentSlice.reducer
