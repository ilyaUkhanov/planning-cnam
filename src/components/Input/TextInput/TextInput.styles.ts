import { TextInput, TextInputProps, TextProps, TouchableOpacityProps, ViewProps } from "react-native";
import { IconProps } from "react-native-vector-icons/Icon";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ThemeProps } from "styled-components";
import styled from "styled-components/native";
import { ITheme } from "../../../interfaces";

export const TextInputRoot = styled.View<ViewProps>``;

type ITextInputTitleProps = TextProps & ThemeProps<ITheme>;

export const TextInputTitle = styled.Text<ITextInputTitleProps>`
    margin-left: 2px;
    font-size: 14px;
    color: ${(props) => props.theme.medium_grey_contrast};
`;

interface ICustomTextInputContainerProps {
    isFocused: boolean;
}
type ITextInputContainerProps = ViewProps & ICustomTextInputContainerProps & ThemeProps<ITheme>;

export const TextInputContainer = styled.View<ITextInputContainerProps>`
    width: 100%;
    border: 2px solid ${(props: any) => (props.isFocused ? props.theme.primary : "transparent")};
    border-radius: 8px;
    margin-bottom: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => props.theme.lowest_grey_contrast};
`;

export const FloatingInputButton = styled.TouchableOpacity<TouchableOpacityProps>`
    margin-right: 12px;
`;

type ITextInputButtonIconProps = IconProps & ThemeProps<ITheme>;

export const TextInputButtonIcon = styled(Icon)<ITextInputButtonIconProps>`
    color: ${(props) => props.theme.medium_grey_contrast};
    font-size: 20px;
`;

type IStyledTextInputProps = TextInputProps & ThemeProps<ITheme>;

export const StyledTextInput = styled(TextInput).attrs((props: IStyledTextInputProps) => ({
    placeholderTextColor: props.theme.low_grey_contrast,
}))<IStyledTextInputProps>`
    color: ${(props) => props.theme.on_background};
    padding: 10px;
    flex: 1;
    width: 100%;
`;
