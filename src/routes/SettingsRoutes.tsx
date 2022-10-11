import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { BackNavigationBar, CommitActionNavigationBar } from "../components";
import { ISettingsRootStackNavigatorParamsList } from "../interfaces";
import { Account, AccountSettings, DisplaySettings, PermissionSettings } from "../pages";

const SettingsRootStack = createStackNavigator<ISettingsRootStackNavigatorParamsList>();

const SettingsRoutes = () => {
    return (
        <SettingsRootStack.Navigator initialRouteName="Account">
            <SettingsRootStack.Screen
                name="Account"
                component={Account}
                options={{
                    title: "Compte",
                    header: (props) => <CommitActionNavigationBar {...props} />,
                }}
            />
            <SettingsRootStack.Screen
                name="AccountSettings"
                component={AccountSettings}
                options={{
                    title: "Paramètres du compte",
                    header: (props) => <BackNavigationBar {...props} />,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            />
            <SettingsRootStack.Screen
                name="PermissionSettings"
                component={PermissionSettings}
                options={{
                    title: "Permissions",
                    header: (props) => <BackNavigationBar {...props} />,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            />
            <SettingsRootStack.Screen
                name="DisplaySettings"
                component={DisplaySettings}
                options={{
                    title: "Affichage",
                    header: (props) => <BackNavigationBar {...props} />,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            />
        </SettingsRootStack.Navigator>
    );
};

export default SettingsRoutes;
