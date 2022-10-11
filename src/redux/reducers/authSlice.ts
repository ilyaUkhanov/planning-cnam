import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    username: string;
}

const initialState: AuthState = {
    username: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        changeUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
    },
});

export const { changeUsername } = authSlice.actions;

export default authSlice.reducer;
