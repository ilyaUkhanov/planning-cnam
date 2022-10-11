import { TextProps, ViewProps } from "react-native";
import { ThemeProps } from "styled-components";
import styled from "styled-components/native";
import { ITheme } from "../../../interfaces";
import Button from "../../Button/Button/Button";
import { IButtonProps } from "../../Button/buttonTypes";
import Text from "../../Text/Text/Text";

type IModalContentProps = ViewProps & ThemeProps<ITheme>;

export const ModalContent = styled.View<IModalContentProps>`
    background-color: ${(props) => props.theme.background_variant};
    max-width: 100%;
    min-width: 70%;
    max-height: 100%;
    border-radius: 8px;
    padding: 15px;
`;

export const ModalTitle = styled(Text)<TextProps>`
    text-align: center;
    margin-bottom: 15px;
`;

export const ModalActions = styled.View<ViewProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`;

type IModalActionButtonProps = IButtonProps & ThemeProps<ITheme>;

export const ModalActionButton = styled(Button)<IModalActionButtonProps>``;

type IModalActionButtonTextProps = TextProps & ThemeProps<ITheme>;

export const ModalActionButtonText = styled.Text<IModalActionButtonTextProps>`
    color: ${(props) => props.theme.on_background};
`;
