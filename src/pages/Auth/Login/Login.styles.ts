import { ImageProps, ViewProps } from "react-native";
import styled from "styled-components/native";
import { Button, IButtonProps } from "../../../components";

export const CompanyLogo = styled.Image<ImageProps>`
    width: 50%;
    height: 50%;
    flex: 3;
    margin: 0 auto;
`;

export const FormContent = styled.View<ViewProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
`;

export const LoginButton = styled(Button)<IButtonProps>`
    margin-top: 15px;
`;
