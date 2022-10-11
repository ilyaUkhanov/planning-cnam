import { ActivityIndicator, ActivityIndicatorProps, TouchableOpacityProps } from "react-native";
import { IconProps } from "react-native-vector-icons/Icon";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled, { css, ThemeProps } from "styled-components/native";
import { ITheme } from "../../../interfaces";

interface ICustomIconButtonTouchableProps {
    size: number;
    transparentBackground: boolean;
}
type IIconButtonTouchableProps = TouchableOpacityProps & ThemeProps<ITheme> & ICustomIconButtonTouchableProps;

export const IconButtonTouchable = styled.TouchableOpacity<IIconButtonTouchableProps>`
    ${(props) =>
        !props.transparentBackground &&
        css`
            background-color: ${props.theme.primary};
        `}
    align-self: center;
    border-radius: 50px;
    width: ${(props) => (props.size ?? DEFAULT_ICON_SIZE) * 2}px;
    height: ${(props) => (props.size ?? DEFAULT_ICON_SIZE) * 2}px;
    align-items: center;
    justify-content: center;
`;

type IIconButtonIconProps = IconProps & ThemeProps<ITheme>;
const DEFAULT_ICON_SIZE = 25;

export const IconButtonIcon = styled(Icon).attrs((props: IIconButtonIconProps) => ({
    color: props.color ?? props.theme.on_primary,
    size: Math.round(props.size ?? DEFAULT_ICON_SIZE),
}))<IIconButtonIconProps>``;

type IIconButtonActivityIndicatorProps = ActivityIndicatorProps & ThemeProps<ITheme>;

export const IconButtonActivityIndicator = styled(ActivityIndicator).attrs((props: IIconButtonActivityIndicatorProps) => ({
    color: props.theme.on_primary,
    size: "small",
}))<IIconButtonActivityIndicatorProps>``;
