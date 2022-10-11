import { TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface ITextInputProps extends TextInputProps {
    title?: string;
    disableClearButton?: boolean;
    textInputContainerStyle?: ViewStyle;
    textInputStyle?: TextStyle;
}
