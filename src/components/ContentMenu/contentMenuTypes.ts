import { TouchableOpacityProps, ViewProps } from "react-native";
import { ICON_FAMILIES } from "../utils/factories/factoryTypes";

export interface IContentMenuProps extends ViewProps {
    title?: string;
    informationText?: string;
    loading?: boolean;
}

export interface IContentMenuItemProps extends TouchableOpacityProps {
    leftIconName?: string;
    leftIconFamily?: ICON_FAMILIES | string;
    label?: string | Element;
    value?: string | Element;
    lastItem?: boolean;
    link?: boolean;
    action?: boolean;
    remove?: boolean;
    disabled?: boolean;
}
