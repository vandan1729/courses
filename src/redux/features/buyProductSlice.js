import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const buyProductSlice = createSlice({
  name: 'buyProduct',
  initialState,
  reducers: {
    setBuyProduct: (state, action) => {
      const product = action.payload
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === product.id,
      )
      if (existingProductIndex === -1) {
        state.items.push(product)
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload
      state.items = state.items.filter((item) => item.id !== productId)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { setBuyProduct, removeProduct, clearCart } =
  buyProductSlice.actions
export default buyProductSlice.reducer
