import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLogged: false,
        userInfo: undefined,
    },
    reducers: {
        loginSuccess: (state, {payload}) => {
            state.isLogged = true;
            // console.log(state.isLogged);
            state.userInfo = payload;
        },
        loginError: (state) => {
            state.isLogged = false;
            // console.log(state.isLogged);
            state.userInfo = undefined;
        },
    }
});

export const { loginSuccess, loginError} = loginSlice.actions;

// export const changeCounter = (state: RootState) => state.counter.value;

export default loginSlice.reducer;
