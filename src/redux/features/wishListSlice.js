import { createSlice } from '@reduxjs/toolkit';

const wishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    wishListValue: 'All Courses',
    wishListItems: [],
    myCourseCardData: [],
  },
  reducers: {
    setWishListValue: (state, action) => {
      state.wishListValue = action.payload;
    },
    toggleWishListItem: (state, action) => {
      const item = action.payload; // Full card object
      const existingIndex = state.wishListItems.findIndex((i) => i.id === item.id);
      if (existingIndex >= 0) {
        state.wishListItems.splice(existingIndex, 1);
      } else {
        state.wishListItems.push(item);
      }
    },
    setMyCourseCardData: (state, action) => {
      state.myCourseCardData = action.payload;
    },
  },
});

export const { setWishListValue, toggleWishListItem, setMyCourseCardData } = wishListSlice.actions;
export default wishListSlice.reducer;
