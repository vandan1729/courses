import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  price: {
    newPrice: '',
    oldPrice: '',
  },
  discount: '',
  details: {
    sections: '',
    lectures: '',
    length: '',
    language: '',
  },
  id: '',
  courseName: '',
  courseDetails: '',
  courseImage: '',
}

const paidOfflineVideo = createSlice({
  name: 'paidOfflineVideo',
  initialState,
  reducers: {
    updateOfflineCardDetails: (state, action) => {
      state.id = action.payload.id
      state.price = action.payload.price
      state.discount = action.payload.discount
      state.details = action.payload.details
      state.courseName = action.payload.courseName
      state.courseDetails = action.payload.courseDetails
      state.courseImage = action.payload.courseImage
    },
  },
})

export const { updateOfflineCardDetails, toggleWishlist } =
  paidOfflineVideo.actions

export default paidOfflineVideo.reducer
