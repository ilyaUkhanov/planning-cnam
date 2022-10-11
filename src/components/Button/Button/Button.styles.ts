import { ActivityIndicator, ActivityIndicatorProps, TextProps, TouchableOpacityProps } from "react-native";
import { ThemeProps } from "styled-components";
import styled from "styled-components/native";
import { ITheme } from "../../../interfaces";

export const ButtonTouchable = styled.TouchableOpacity<TouchableOpacityProps & ThemeProps<ITheme>>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.primary};
    width: 100%;
    margin-bottom: 4px;
    border-radius: 8px;
    padding: 10px;
    height: 45px;
`;

export const ButtonText = styled.Text<TextProps & ThemeProps<ITheme>>`
    color: ${(props) => props.theme.on_primary};
    text-align: center;
    line-height: 22.5px;
`;

type IButtonActivityIndicatorProps = ActivityIndicatorProps & ThemeProps<ITheme>;

export const ButtonActivityIndicator = styled(ActivityIndicator).attrs((props: IButtonActivityIndicatorProps) => ({
    color: props.theme.on_primary,
    size: "small",
}))<IButtonActivityIndicatorProps>`
    margin-left: 10px;
`;
