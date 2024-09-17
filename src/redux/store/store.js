// src/redux/store/store.js
import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../features/authSlice'
import buyProductReducer from '../features/buyProductSlice'
import cardReducer from '../features/cardSlice'
import modalReducer from '../features/modalSlice'
import paidOfflineVideo from '../features/paidOfflineVideo'
import paymentReducer from '../features/paymentSlice'
import unPaidWebinarReducer from '../features/unPaidWebinarSlice'
import userReducer from '../features/userDataSlice'
import wishListReducer from '../features/wishListSlice'

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
