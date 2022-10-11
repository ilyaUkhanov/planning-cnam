import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MainNavigationBar } from "../components";
import { IMainRootStackNavigatorParamsList } from "../interfaces";
import { Home } from "../pages";
import SettingsRoutes from "./SettingsRoutes";

const MainRootStack = createStackNavigator<IMainRootStackNavigatorParamsList>();

const MainRoutes = () => {
    return (
        <MainRootStack.Navigator initialRouteName="Home">
            <MainRootStack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Accueil",
                    header: (props) => <MainNavigationBar {...props} />,
                }}
            />
            <MainRootStack.Screen
                name="Settings"
                component={SettingsRoutes}
                options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS }}
            />
        </MainRootStack.Navigator>
    );
};

export default MainRoutes;
