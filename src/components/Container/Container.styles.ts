import { ScrollView, ScrollViewProps, ViewProps } from "react-native";
import { SafeAreaViewProps, useSafeAreaInsets } from "react-native-safe-area-context";
import styled, { ThemeProps } from "styled-components/native";
import { ITheme } from "../../interfaces";

type IRootContainerProps = SafeAreaViewProps & ThemeProps<ITheme>;

const insets = useSafeAreaInsets();

export const RootContainer = styled.SafeAreaView<IRootContainerProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: ${(props: any) => (props.variant ? props.theme.background_variant : props.theme.background)};
`;

export const WhiteSpace = styled.View<ViewProps>`
    width: 100%;
    height: 15px;
`;

export const PageContent = styled.View<ViewProps>`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
`;

type IContainerScrollViewProps = ScrollViewProps & ThemeProps<ITheme>;

export const ContainerScrollView = styled(ScrollView).attrs((props: IContainerScrollViewProps) => ({
    contentContainerStyle: {
        minHeight: "100%",
    },
}))<IContainerScrollViewProps>`
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    flex: 1;
`;
