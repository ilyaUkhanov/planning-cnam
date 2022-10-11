import { IconProps } from "react-native-vector-icons/Icon";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ThemeProps } from "styled-components";
import styled from "styled-components/native";
import { ITheme } from "../../../interfaces";

type ICheckIconProps = IconProps & ThemeProps<ITheme>;

export const CheckIcon = styled(Icon)<ICheckIconProps>`
    color: ${(props) => props.theme.secondary};
    font-size: 20px;
`;
