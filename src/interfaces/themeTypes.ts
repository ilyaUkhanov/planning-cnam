export enum THEMES {
    LIGHT_THEME,
    DARK_THEME,
}
export interface ITheme {
    name: THEMES;

    primary: string;
    primary_variant: string;
    secondary: string;
    secondary_variant: string;

    highest_grey_contrast: string;
    higher_grey_contrast: string;
    high_grey_contrast: string;
    medium_grey_contrast: string;
    low_grey_contrast: string;
    lower_grey_contrast: string;
    lowest_grey_contrast: string;

    background: string;
    background_variant: string;
    surface: string;
    error: string;

    on_primary: string;
    on_secondary: string;
    on_background: string;
    on_surface: string;
    on_error: string;
}
