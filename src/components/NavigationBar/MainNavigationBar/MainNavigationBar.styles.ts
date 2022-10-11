import { TextProps, ViewProps } from "react-native";
import { ThemeProps } from "styled-components";
import styled from "styled-components/native";
import { ITheme } from "../../../interfaces";
import { IIconButtonProps } from "../../Button/buttonTypes";
import IconButton from "../../Button/IconButton/IconButton";

type IContainerProps = ViewProps & ThemeProps<ITheme>;

export const Container = styled.View<IContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => props.theme.primary};
    width: 100%;
`;

export const ActionButtonContainer = styled.View<ViewProps>`
    flex: 1;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ActionButton = styled(IconButton).attrs((props) => ({
    size: 30,
}))<IIconButtonProps>``;

export const ViewNameContainer = styled.View<ViewProps>`
    flex: 2;
`;

type IViewNameProps = TextProps & ThemeProps<ITheme>;

export const ViewName = styled.Text<IViewNameProps>`
    color: ${(props) => props.theme.on_primary};
    font-size: 20px;
    text-align: center;
`;
