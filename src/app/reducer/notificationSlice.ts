import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";

export const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        hasNewMessage: false
    },
    reducers: {
        newMessage: (state) => {
            state.hasNewMessage = !state.hasNewMessage;
        },
    }
});

export const { newMessage} = notificationSlice.actions;

// export const changeCounter = (state: RootState) => state.counter.value;

export default notificationSlice.reducer;
