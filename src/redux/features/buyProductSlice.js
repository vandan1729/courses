import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const buyProductSlice = createSlice({
  name: 'buyProduct',
  initialState,
  reducers: {
    setBuyProduct: (state, action) => {
      const product = action.payload
      const existingProductIndex = state.findIndex(
        (item) => item.id === product.id,
      )
      if (existingProductIndex === -1) {
        state.push(product)
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload
      return state.filter((item) => item.id !== productId)
    },
    clearCart: () => {
      return []
    },
  },
})

export const { setBuyProduct, removeProduct, clearCart } =
  buyProductSlice.actions
export default buyProductSlice.reducer
