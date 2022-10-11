import { Switch, SwitchProps } from "react-native";
import { ThemeProps } from "styled-components";
import styled from "styled-components/native";
import { ITheme } from "../../../interfaces";

type StyledSwitchProps = SwitchProps & ThemeProps<ITheme>;

export const StyledSwitch = styled(Switch).attrs((props: StyledSwitchProps) => ({
    trackColor: { false: props.theme.low_grey_contrast, true: props.theme.secondary },
    thumbColor: props.value ? props.theme.secondary_variant : props.theme.medium_grey_contrast,
}))<StyledSwitchProps>``;
