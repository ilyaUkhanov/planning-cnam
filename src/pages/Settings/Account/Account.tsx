import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Container, ContentMenu, ContentMenuItem } from "../../../components";
import { ISettingsRootStackNavigatorParamsList } from "../../../interfaces";
import { useAuth } from "../../../services";

type IAccountProps = StackScreenProps<ISettingsRootStackNavigatorParamsList, "Account">;

const Account: React.FC<IAccountProps> = ({ navigation }) => {
    const { logout } = useAuth();

    return (
        <Container variant>
            <ContentMenu>
                <ContentMenuItem leftIconName="cog" label="Paramètres du compte" link onPress={() => navigation.navigate("AccountSettings")} />
                <ContentMenuItem leftIconName="shield-account-variant" label="Permissions" link onPress={() => navigation.navigate("PermissionSettings")} />
                <ContentMenuItem leftIconName="cellphone" label="Affichage" link onPress={() => navigation.navigate("DisplaySettings")} />
            </ContentMenu>
            <ContentMenu>
                <ContentMenuItem label="Déconnexion" onPress={logout} remove />
            </ContentMenu>
        </Container>
    );
};

export default Account;
