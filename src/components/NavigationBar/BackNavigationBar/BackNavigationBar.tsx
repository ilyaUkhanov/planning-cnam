import { StackHeaderProps } from "@react-navigation/stack";
import React from "react";
import { ActionButtonContainer, BackButton, Container, ViewName, ViewNameContainer } from "./BackNavigationBar.styles";

const BackNavigationBar: React.FC<StackHeaderProps> = (props) => {
    const { options, navigation } = props;
    return (
        <Container>
            <ActionButtonContainer style={{ justifyContent: "flex-start" }}>
                {/* Partie à gauche du title */}
                <BackButton name="chevron-left" onPress={() => navigation.goBack()} transparentBackground />
            </ActionButtonContainer>
            <ViewNameContainer>
                <ViewName numberOfLines={1}>{options.title}</ViewName>
            </ViewNameContainer>
            <ActionButtonContainer style={{ justifyContent: "flex-end" }}>{/* Partie à droite  du title */}</ActionButtonContainer>
        </Container>
    );
};

export default BackNavigationBar;
