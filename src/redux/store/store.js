// src/redux/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../features/cardSlice';
import homePageColorOpacityReducer from '../features/homePageColorOpacitySlice';
import userReducer from '../features/userDataSlice';
import wishListReducer from '../features/wishListSlice';
import modalReducer from '../features/modalSlice';  

const store = configureStore({
  reducer: {
    card: cardReducer,
    homePageColorOpacity: homePageColorOpacityReducer,
    user: userReducer,
    wishList: wishListReducer,
    modal: modalReducer,  
  },
});

export default store;