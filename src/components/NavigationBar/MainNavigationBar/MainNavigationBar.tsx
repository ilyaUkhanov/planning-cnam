import { StackHeaderProps } from "@react-navigation/stack";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActionButton, ActionButtonContainer, Container, ViewName, ViewNameContainer } from "./MainNavigationBar.styles";

const MainNavigationBar: React.FC<StackHeaderProps> = (props) => {
    const insets = useSafeAreaInsets();
    const { options, navigation } = props;
    return (
        <Container style={{paddingTop:insets.top}}>
            <ActionButtonContainer style={{ justifyContent: "flex-start" }}>
                {/* Boutons de gauche */}
                <ActionButton name="account-circle" onPress={() => navigation.navigate("Settings")} transparentBackground />
            </ActionButtonContainer>
            <ViewNameContainer>
                <ViewName numberOfLines={1}>{options.title}</ViewName>
            </ViewNameContainer>
            <ActionButtonContainer style={{ justifyContent: "flex-end" }}>{/* Boutons de droite */}</ActionButtonContainer>
        </Container>
    );
};

export default MainNavigationBar;
