import { createSlice } from '@reduxjs/toolkit'
import profileImg from '/src/assets/profileImg.jpg'

const initialState = {
  userFirstName: 'UserFirstName',
  userLastName: 'UserLastName',
  userHeadLine: 'Hello',
  userEmail: '',
  userProfile: profileImg,
  userPassword: 'admin',
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
