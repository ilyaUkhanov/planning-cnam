import { ActivityIndicator, ActivityIndicatorProps, TextProps, ViewProps } from "react-native";
import { ThemeProps } from "styled-components";
import styled from "styled-components/native";
import { ITheme } from "../../../interfaces";

export const Content = styled.View<ViewProps>`
    margin-bottom: 25px;
`;

export const TitleContainer = styled.View<ViewProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
`;

type IContentTitleProps = TextProps & ThemeProps<ITheme>;

export const ContentTitle = styled.Text<IContentTitleProps>`
    text-transform: uppercase;
    color: ${(props) => props.theme.high_grey_contrast};
    margin-bottom: 5px;
    font-size: 12px;
`;

type ITitleLoadingIndicatorProps = ActivityIndicatorProps & ThemeProps<ITheme>;

export const TitleLoadingIndicator = styled(ActivityIndicator).attrs((props: ITitleLoadingIndicatorProps) => ({
    color: props.theme.medium_grey_contrast,
    size: 12,
}))<ActivityIndicatorProps>`
    margin-left: 10px;
    margin-top: -5px;
`;

type IContentContainerProps = ViewProps & ThemeProps<ITheme>;

export const ContentContainer = styled.View<IContentContainerProps>`
    background-color: ${(props) => props.theme.lowest_grey_contrast};
    border-radius: 8px;
`;

type IContentInformationProps = TextProps & ThemeProps<ITheme>;

export const ContentInformation = styled.Text<IContentInformationProps>`
    color: ${(props) => props.theme.medium_grey_contrast};
    margin-left: 15px;
    margin-top: 5px;
    font-size: 12px;
`;
