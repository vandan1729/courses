// src/redux/features/unPaidWebinarSlice.js
import { createSlice } from '@reduxjs/toolkit';

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
    courseName: '', 
    courseDetails: '', 
    courseImage: '', // Add courseImage to initialState
};

const unPaidWebinarSlice = createSlice({
    name: 'unPaidWebinar',
    initialState,
    reducers: {
        updateCardDetails: (state, action) => {
            state.price = action.payload.price;
            state.discount = action.payload.discount;
            state.details = action.payload.details;
            state.courseName = action.payload.courseName; 
            state.courseDetails = action.payload.courseDetails;
            state.courseImage = action.payload.courseImage;
        },
       
    },
});

export const { updateCardDetails, toggleWishlist } = unPaidWebinarSlice.actions;

export default unPaidWebinarSlice.reducer;
