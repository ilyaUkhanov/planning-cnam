import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appearance } from "react-native";
import { DARK_THEME, LIGHT_THEME } from "../../constants";
import { ITheme } from "../../interfaces";

interface ThemeState {
    theme: ITheme;
}

const initialState: ThemeState = {
    theme: Appearance.getColorScheme() === "dark" ? DARK_THEME : LIGHT_THEME,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<ITheme>) => {
            state.theme = action.payload;
        },
    },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
