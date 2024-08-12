// src/redux/features/wishListSlice.js
import { createSlice } from '@reduxjs/toolkit';

const wishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    wishListValue: 'All Courses',
    wishListItems: [],
  },
  reducers: {
    setWishListValue: (state, action) => {
      state.wishListValue = action.payload;
    },
    toggleWishListItem: (state, action) => {
      const item = action.payload;
      const existingIndex = state.wishListItems.findIndex((i) => i.id === item.id);
      if (existingIndex >= 0) {
        state.wishListItems.splice(existingIndex, 1);
      } else {
        state.wishListItems.push(item);
      }
    },
  },
});

export const { setWishListValue, toggleWishListItem } = wishListSlice.actions;
export default wishListSlice.reducer;
