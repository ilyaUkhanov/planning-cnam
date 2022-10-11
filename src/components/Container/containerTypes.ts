import { ViewProps, ViewStyle } from "react-native";

export interface IContainerProps extends ViewProps {
    variant?: boolean;
    noScrollView?: boolean;
    rootContainerStyle?: ViewStyle;
    containerStyle?: ViewStyle;
    scrollViewStyle?: ViewStyle;
}
