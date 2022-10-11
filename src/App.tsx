import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import React, { ReactNode, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "./redux";
import { persistor, store } from "./redux/store";
import { AuthRoutes } from "./routes";
import { ApiProvider, AuthProvider, ErrorHandlerProvider, PermissionProvider } from "./services";

const queryClient = new QueryClient();

const AppCore: React.FC<ReactNode> = () => {
    const navigationRef = useRef<NavigationContainerRef<ReactNavigation.RootParamList> | null>(null);
    const [isNavigatorMounted, setIsNavigatorMounted] = useState<boolean>(false);

    const theme = useSelector((state) => state.themeSlice.theme);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <ErrorHandlerProvider>
                    <PermissionProvider>
                        <ApiProvider>
                            <NavigationContainer ref={navigationRef} onReady={() => setIsNavigatorMounted(true)}>
                                {isNavigatorMounted && (
                                    <AuthProvider>
                                        <AuthRoutes />
                                    </AuthProvider>
                                )}
                            </NavigationContainer>
                        </ApiProvider>
                    </PermissionProvider>
                </ErrorHandlerProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

const App: React.FC<ReactNode> = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppCore />
            </PersistGate>
        </Provider>
    );
};

export default App;
