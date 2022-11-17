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
            state.isShowForgotPassword = false;
        },
        openForgotPassword: (state) => {
            state.isShowForgotPassword = true;
        },
        openLoginModal: (state) => {
            state.isLoginModalOpen = true;
        }
    }
});

export const { closeForgotPasswordModal, openForgotPassword, openLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;
