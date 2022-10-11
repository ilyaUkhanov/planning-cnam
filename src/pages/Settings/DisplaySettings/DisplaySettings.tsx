import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Container, ContentMenu, ContentMenuItem } from "../../../components";
import { DARK_THEME, LIGHT_THEME } from "../../../constants";
import { ISettingsRootStackNavigatorParamsList, THEMES } from "../../../interfaces";
import { useDispatch, useSelector } from "../../../redux";
import { changeTheme } from "../../../redux/reducers/themeSlice";
import { CheckIcon } from "./DisplaySettings.styles";

type IDisplaySettingsProps = StackScreenProps<ISettingsRootStackNavigatorParamsList, "DisplaySettings">;

const DisplaySettings: React.FC<IDisplaySettingsProps> = ({ navigation }) => {
    const theme = useSelector((state) => state.themeSlice.theme);
    const dispatch = useDispatch();

    return (
        <Container variant>
            <ContentMenu>
                <ContentMenuItem label="Thème clair" value={theme.name === THEMES.LIGHT_THEME && <CheckIcon name="check" />} onPress={() => dispatch(changeTheme(LIGHT_THEME))} />
                <ContentMenuItem label="Thème sombre" value={theme.name === THEMES.DARK_THEME && <CheckIcon name="check" />} onPress={() => dispatch(changeTheme(DARK_THEME))} />
            </ContentMenu>
        </Container>
    );
};

export default DisplaySettings;
