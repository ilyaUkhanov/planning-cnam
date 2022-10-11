import { TextProps, TouchableOpacityProps, ViewProps } from "react-native";
import { ThemeProps } from "styled-components";
import styled from "styled-components/native";
import { ITheme } from "../../../interfaces";

type IContainerProps = ViewProps & ThemeProps<ITheme>;

export const Container = styled.View<IContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => props.theme.primary};
    width: 100%;
    height: 50px;
`;

export const ViewNameContainer = styled.View<ViewProps>`
    flex: 3;
`;

type IViewNameProps = TextProps & ThemeProps<ITheme>;

export const ViewName = styled.Text<IViewNameProps>`
    color: ${(props) => props.theme.on_primary};
    font-size: 20px;
    text-align: center;
`;

export const ActionButtonContainer = styled.View<ViewProps>`
    flex: 1;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const ActionButton = styled.TouchableOpacity<TouchableOpacityProps>`
    margin-right: 15px;
`;

type IActionButtonLabelProps = ThemeProps<ITheme> & TextProps;

export const ActionButtonLabel = styled.Text<IActionButtonLabelProps>`
    color: ${(props) => props.theme.on_primary};
    font-size: 20px;
    font-weight: bold;
`;
