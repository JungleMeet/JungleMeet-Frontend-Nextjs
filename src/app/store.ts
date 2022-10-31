import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import LoginReducer from "./reducer/loginSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            login: LoginReducer,
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
