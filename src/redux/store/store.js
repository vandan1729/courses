// src/redux/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../features/cardSlice';
import userReducer from '../features/userDataSlice';
import wishListReducer from '../features/wishListSlice';
import modalReducer from '../features/modalSlice';  
import unPaidWebinarReducer from '../features/unPaidWebinarSlice';  

const store = configureStore({
  reducer: {
    card: cardReducer,
    user: userReducer,
    wishList: wishListReducer,
    modal: modalReducer,  
    unPaidWebinar: unPaidWebinarReducer,  
  },
});

export default store;
