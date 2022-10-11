import { TextProps } from "react-native";
import { ThemeProps } from "styled-components";
import styled from "styled-components/native";
import { ITheme } from "../../../interfaces";

type IStyledTextProps = TextProps & ThemeProps<ITheme>;

export const StyledText = styled.Text<IStyledTextProps>`
    font-size: 18px;
    color: ${(props) => props.theme.on_background};
    font-weight: 400;
    margin-bottom: 10px;
`;
