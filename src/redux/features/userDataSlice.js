import { createSlice } from '@reduxjs/toolkit'
import profileImg from '/src/assets/profileImg.jpg'

const initialState = {
  userFirstName: 'Ayush',
  userLastName: 'Patel',
  userHeadLine: 'A Bold Attempt Is Half Success',
  userEmail: 'ayush@gmail.com',
  userProfile: profileImg,
  userPassword: '123',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setUserData } = userSlice.actions
export default userSlice.reducer
