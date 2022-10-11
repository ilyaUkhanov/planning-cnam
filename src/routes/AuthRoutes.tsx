import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { IAuthRootStackNavigatorParamsList } from "../interfaces";
import { Login } from "../pages";
import { useAuth } from "../services";
import MainRoutes from "./MainRoutes";

const AuthRootStack = createStackNavigator<IAuthRootStackNavigatorParamsList>();

const AuthRoutes = () => {
    const { user } = useAuth();

    return (
        <AuthRootStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {user ? (
                <AuthRootStack.Screen name="Main" component={MainRoutes} />
            ) : (
                <AuthRootStack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        animationTypeForReplace: "pop",
                    }}
                />
            )}
        </AuthRootStack.Navigator>
    );
};

export default AuthRoutes;
