import { ITheme, THEMES } from "../interfaces";

// @see Material color system https://material.io/design/color/the-color-system.html#color-theme-creation
export const LIGHT_THEME: ITheme = {
    name: THEMES.LIGHT_THEME,

    primary: "#91f086",
    primary_variant: "#5ebd57",
    secondary: "#e586f0",
    secondary_variant: "#b156bd",

    highest_grey_contrast: "#212121",
    higher_grey_contrast: "#424242",
    high_grey_contrast: "#616161",
    medium_grey_contrast: "#888888",
    low_grey_contrast: "#BDBDBD",
    lower_grey_contrast: "#e7e8eb",
    lowest_grey_contrast: "#FFFFFF",

    background: "#FFFFFF",
    background_variant: "#f3f2f8",
    surface: "#FFFFFF",
    error: "#D03864",

    on_primary: "#333333",
    on_secondary: "#333333",
    on_background: "#333333",
    on_surface: "#333333",
    on_error: "#FFFFFF",
};

export const DARK_THEME: ITheme = {
    name: THEMES.DARK_THEME,

    primary: "#91f086",
    primary_variant: "#5ebd57",
    secondary: "#e586f0",
    secondary_variant: "#b156bd",

    highest_grey_contrast: "#F5F5F5",
    higher_grey_contrast: "#E0E0E0",
    high_grey_contrast: "#BDBDBD",
    medium_grey_contrast: "#a8a8ab",
    low_grey_contrast: "#616161",
    lower_grey_contrast: "#414143",
    lowest_grey_contrast: "#212121",

    background: "#121212",
    background_variant: "#000000",
    surface: "#121212",
    error: "#CF6679",

    on_primary: "#000000",
    on_secondary: "#000000",
    on_background: "#FFFFFF",
    on_surface: "#FFFFFF",
    on_error: "#000000",
};
