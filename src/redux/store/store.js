// src/redux/store/store.js
import { configureStore } from '@reduxjs/toolkit'
import cardReducer from '../features/cardSlice'
import userReducer from '../features/userDataSlice'
import wishListReducer from '../features/wishListSlice'
import modalReducer from '../features/modalSlice'
import unPaidWebinarReducer from '../features/unPaidWebinarSlice'
import buyProductReducer from '../features/buyProductSlice'
import authReducer from '../features/authSlice'
import paidOfflineVideo from '../features/paidOfflineVideo'
import paymentReducer from '../features/paymentSlice'

const store = configureStore({
  reducer: {
    card: cardReducer,
    user: userReducer,
    wishList: wishListReducer,
    modal: modalReducer,
    unPaidWebinar: unPaidWebinarReducer,
    buyProduct: buyProductReducer,
    auth: authReducer,
    paidOfflineVideo: paidOfflineVideo,
    payment: paymentReducer,
  },
})

export default store
