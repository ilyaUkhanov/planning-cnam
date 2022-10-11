import React, { memo } from "react";
import { ContainerScrollView, PageContent, RootContainer, WhiteSpace } from "./Container.styles";
import { IContainerProps } from "./ContainerTypes";

const Container: React.FC<IContainerProps> = (props) => {
    const { children, noScrollView, rootContainerStyle, containerStyle, scrollViewStyle, ...otherProps } = props;
    return (
        <RootContainer {...otherProps} style={rootContainerStyle}>
            {noScrollView ? (
                <PageContent style={containerStyle}>{children}</PageContent>
            ) : (
                <ContainerScrollView style={scrollViewStyle} keyboardShouldPersistTaps="always">
                    <WhiteSpace />
                    <PageContent style={containerStyle}>{children}</PageContent>
                    <WhiteSpace />
                </ContainerScrollView>
            )}
        </RootContainer>
    );
};

export default memo(Container);
