import { createSlice } from '@reduxjs/toolkit'

const wishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    wishListValue: 'All Courses',
    wishListItems: [],
    allCourseCardData: [],
    buyCourseData: [],
  },
  reducers: {
    setWishListValue: (state, action) => {
      state.wishListValue = action.payload
    },
    toggleWishListItem: (state, action) => {
      const item = action.payload // Full card object
      const existingIndex = state.wishListItems.findIndex(
        (i) => i.id === item.id,
      )
      if (existingIndex >= 0) {
        // Remove item if it exists
        state.wishListItems.splice(existingIndex, 1)
      } else {
        // Add item if it does not exist
        state.wishListItems.push(item)
      }
    },
    setAllCourseCardData: (state, action) => {
      state.allCourseCardData = action.payload
    },
    setBuyCourseData: (state, action) => {
      state.buyCourseData = [...state.buyCourseData, ...action.payload]
    },
  },
})

export const {
  setWishListValue,
  toggleWishListItem,
  setAllCourseCardData,
  setBuyCourseData,
} = wishListSlice.actions
export default wishListSlice.reducer
