import { TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
import { IconProps } from "react-native-vector-icons/Icon";
import { ICON_FAMILIES } from "../utils/factories/factoryTypes";

export interface IButtonProps extends TouchableOpacityProps {
    loading?: boolean;
    touchableStyle?: ViewStyle;
    textStyle?: TextStyle;
    activityIndicatorStyle?: ViewStyle;
}

interface ICustomButtonProps {
    loading?: boolean;
    iconFamily?: ICON_FAMILIES | string;
    touchableStyle?: ViewStyle;
    iconStyle?: TextStyle;
    activityIndicatorStyle?: ViewStyle;
    transparentBackground?: boolean;
}
export type IIconButtonProps = TouchableOpacityProps & IconProps & ICustomButtonProps;
