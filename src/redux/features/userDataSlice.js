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
        userPassword,
        userHeadLine,
        first_name,
        last_name,
        email,
        profile_picture,
        userProfile,
      } = action.payload

      state.userFirstName = first_name ?? state.userFirstName
      state.userLastName = last_name ?? state.userLastName
      state.userEmail = email ?? state.userEmail
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
