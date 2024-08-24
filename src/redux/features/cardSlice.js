import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardValue: 'All Recommendation',
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCardValue: (state, action) => {
      state.cardValue = action.payload
    },
  },
})

export const { setCardValue } = cardSlice.actions
export default cardSlice.reducer
