import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateType } from "./redux/store";

interface RootState {
    visibility: boolean;
}

const initialState: RootState = {
    visibility: true
}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setVisibility: (state, action: PayloadAction<boolean>) => {
            state.visibility = action.payload;
        }
    }
});

export const { setVisibility } = rootSlice.actions;

export const selectVisibility = (state: RootStateType) => state.root.visibility.valueOf();

export default rootSlice.reducer;