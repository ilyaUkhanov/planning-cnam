import { StackScreenProps } from "@react-navigation/stack";
import { Formik, FormikHelpers } from "formik";
import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { companyLogo } from "../../../assets";
import { Container, TextInput } from "../../../components";
import { IAuthRootStackNavigatorParamsList } from "../../../interfaces";
import { useSelector } from "../../../redux";
import { useAuth } from "../../../services";
import { CompanyLogo, FormContent, LoginButton } from "./Login.styles";

type ILoginProps = StackScreenProps<IAuthRootStackNavigatorParamsList, "Login">;
interface ILoginFormValues {
    username: string;
    password: string;
}

const Login: React.FC<ILoginProps> = () => {
    const { login } = useAuth();
    const previousConnectedUsername = useSelector(
        (state) => state.authSlice.username
    );

    const _login = (
        values: ILoginFormValues,
        actions: FormikHelpers<ILoginFormValues>
    ) => {
        const { username, password } = values;
        login(username, password).finally(() => actions.setSubmitting(false));
    };

    return (
        <Container variant>
            <CompanyLogo source={companyLogo} resizeMode="contain" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <Formik
                    initialValues={{
                        username: previousConnectedUsername,
                        password: "",
                    }}
                    onSubmit={_login}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        isSubmitting,
                    }) => (
                        <FormContent>
                            <TextInput
                                placeholder="Nom d'utilisateur"
                                value={values.username}
                                onChangeText={handleChange("username")}
                                onBlur={handleBlur("username")}
                            />
                            <TextInput
                                placeholder="Mot de passe"
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                secureTextEntry={true}
                            />
                            <LoginButton
                                loading={isSubmitting}
                                onPress={handleSubmit}
                            >
                                Connexion
                            </LoginButton>
                        </FormContent>
                    )}
                </Formik>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default Login;
