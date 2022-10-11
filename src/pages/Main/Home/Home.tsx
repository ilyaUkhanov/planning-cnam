import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Container, Text } from "../../../components";
import { IMainRootStackNavigatorParamsList } from "../../../interfaces";

type IHomeProps = StackScreenProps<IMainRootStackNavigatorParamsList, "Home">;

const Home: React.FC<IHomeProps> = () => {
    return (
        <Container>
            <Text>Home 🤗</Text>
        </Container>
    );
};

export default Home;
