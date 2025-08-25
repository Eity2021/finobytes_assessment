import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null
};
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
    }
})

export const { } = notificationSlice.actions;
export default notificationSlice.reducer;