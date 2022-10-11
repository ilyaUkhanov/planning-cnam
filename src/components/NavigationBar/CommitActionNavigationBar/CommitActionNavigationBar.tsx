import { StackHeaderProps } from "@react-navigation/stack";
import React from "react";
import { ActionButton, ActionButtonContainer, ActionButtonLabel, Container, ViewName, ViewNameContainer } from "./CommitActionNavigationBar.styles";

const CommitActionNavigationBar: React.FC<StackHeaderProps> = (props) => {
    const { options, navigation } = props;
    return (
        <Container>
            <ActionButtonContainer>{/* Partie gauche du title */}</ActionButtonContainer>
            <ViewNameContainer>
                <ViewName numberOfLines={1}>{options.title}</ViewName>
            </ViewNameContainer>
            <ActionButtonContainer>
                {/* Partie droite du title */}
                <ActionButton onPress={() => navigation.goBack()}>
                    <ActionButtonLabel>OK</ActionButtonLabel>
                </ActionButton>
            </ActionButtonContainer>
        </Container>
    );
};

export default CommitActionNavigationBar;
