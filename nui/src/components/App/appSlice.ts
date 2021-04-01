import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

interface AppState {
    visibility: boolean;
}

const initialState: AppState = {
    visibility: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setVisibility: (state, action: PayloadAction<boolean>) => {
            state.visibility = action.payload;
        }
    }
});

export const { setVisibility } = appSlice.actions;

export const selectVisibility = (state: RootState) => state.app.visibility.valueOf();

export default appSlice.reducer;