import { createSlice } from "@reduxjs/toolkit";

export const loginModalSlice = createSlice({
    name: "loginModal",
    initialState: {
        isLoginModalOpen: false,
        isShowForgotPassword: false
    },
    reducers: {
        closeForgotPasswordModal: (state) => {
            state.isLoginModalOpen = false;
            // console.log(state.isLoginModalOpen);
            state.isShowForgotPassword = false;
            console.log(state.isShowForgotPassword);
        },
        openForgotPassword: (state) => {
            // console.log(state.isLoginModalOpen);
            state.isShowForgotPassword = true;
            console.log(state.isShowForgotPassword);
        },
        openLoginModal: (state) => {
            state.isLoginModalOpen = true;
            console.log(state.isLoginModalOpen);
        }
    }
});

export const { closeForgotPasswordModal, openForgotPassword, openLoginModal } = loginModalSlice.actions;

// export const changeCounter = (state: RootState) => state.counter.value;

export default loginModalSlice.reducer;
