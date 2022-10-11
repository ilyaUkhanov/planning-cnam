import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Container, ContentMenu, ContentMenuItem } from "../../../components";
import { ISettingsRootStackNavigatorParamsList } from "../../../interfaces";
import { useAuth } from "../../../services";

type IAccountSettingsProps = StackScreenProps<ISettingsRootStackNavigatorParamsList, "AccountSettings">;

const AccountSettings: React.FC<IAccountSettingsProps> = ({ navigation }) => {
    const { user } = useAuth();

    return (
        <Container variant>
            <ContentMenu>
                <ContentMenuItem label="Nom d'utilisateur" value={user?.username} />
                <ContentMenuItem label="Prénom" value={user?.firstname} />
                <ContentMenuItem label="Nom de famille" value={user?.name} />
            </ContentMenu>
        </Container>
    );
};

export default AccountSettings;
