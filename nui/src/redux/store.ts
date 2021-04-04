import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../rootSlice";

export const store = configureStore({
    reducer: {
        root: rootReducer
    }
});

export type RootStateType = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
