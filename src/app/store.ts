import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import LoginReducer from "./reducer/loginSlice";
import PageReducer from './reducer/pageSlice';
import loginModalReducer from './reducer/loginModalSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            login: LoginReducer,
            page: PageReducer,
            loginModal: loginModalReducer
        },
    });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<String>
>;

export default store;
