import { TextProps } from "react-native";
import { IconProps } from "react-native-vector-icons/Icon";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { css, ThemeProps } from "styled-components";
import styled from "styled-components/native";
import { hex2rgba } from "../../../helpers";
import { ITheme } from "../../../interfaces";
import { IContentMenuItemProps } from "../contentMenuTypes";

type ILeftIconComponentProps = IconProps & ThemeProps<ITheme>;

export const LeftIconComponent = styled(Icon)<ILeftIconComponentProps>`
    color: ${(props) => props.theme.on_background};
    margin-right: 15px;
`;

type IItemContainerProps = IContentMenuItemProps & ThemeProps<ITheme>;

export const ItemContainer = styled.TouchableOpacity<IItemContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 45px;
    padding: 10px 15px;
    ${(props) =>
        !props.lastItem &&
        css`
            border-bottom-color: ${hex2rgba(props.theme.lower_grey_contrast, 0.5)};
            border-bottom-width: 1px;
        `}
`;

interface ICustomItemLabelProps {
    action?: boolean;
    remove?: boolean;
}
type IItemLabelProps = TextProps & ThemeProps<ITheme> & ICustomItemLabelProps;

export const ItemLabel = styled.Text<IItemLabelProps>`
    flex: 1;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => (props.action ? "#007aff" : props.remove ? "#ff3c31" : props.theme.on_background)};
`;

type ILinkIconProps = IconProps & ThemeProps<ITheme>;

export const LinkIcon = styled(Icon)<ILinkIconProps>`
    color: ${(props) => props.theme.low_grey_contrast};
    margin-right: -5px;
`;

type IItemValueProps = TextProps & ThemeProps<ITheme>;

export const ItemValue = styled.Text<IItemValueProps>`
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.medium_grey_contrast};
`;
