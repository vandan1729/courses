import { createSlice } from '@reduxjs/toolkit'

import profileImg from '/src/assets/profileImg.jpg'

const initialState = {
  userFirstName: '',
  userLastName: '',
  userHeadLine: '',
  userEmail: '',
  userProfile: profileImg,
  userPassword: '',
  notification: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const {
        userFirstName,
        userLastName,
        userEmail,
        userPassword,
        userHeadLine,
        userProfile,
      } = action.payload

      state.userFirstName = userFirstName ?? state.userFirstName
      state.userLastName = userLastName ?? state.userLastName
      state.userEmail = userEmail ?? state.userEmail
      state.userPassword = userPassword ?? state.userPassword
      state.userHeadLine = userHeadLine ?? state.userHeadLine
      state.userProfile = userProfile ?? state.userProfile

      state.notification =
        !state.userFirstName ||
        !state.userLastName ||
        !state.userEmail ||
        !state.userPassword ||
        !state.userHeadLine ||
        !state.userProfile
          ? 'Please fill out your profile completely.'
          : ''
    },
    clearNotification: (state) => {
      state.notification = '' // Clear the notification
    },
  },
})

export const { setUserData, clearNotification } = userSlice.actions
export default userSlice.reducer
