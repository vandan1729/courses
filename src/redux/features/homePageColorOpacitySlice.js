import { createSlice } from "@reduxjs/toolkit";

const homePageColorOpacitySlice = createSlice({
    name: "homePageColorOpacity",
    initialState: false,
    reducers: {
        setOpacityValue: (state, action) => action.payload,
    },
});

export const { setOpacityValue } = homePageColorOpacitySlice.actions;
export default homePageColorOpacitySlice.reducer;
