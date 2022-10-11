import React, { memo, useMemo } from "react";
import { IContentMenuProps } from "../contentMenuTypes";
import { Content, ContentContainer, ContentInformation, ContentTitle, TitleContainer, TitleLoadingIndicator } from "./ContentMenu.styles";

const ContentMenu: React.FC<IContentMenuProps> = (props) => {
    const { children, title, informationText, loading, ...otherProps } = props;

    const customChildren = useMemo(() => {
        const childArray = Array.isArray(children) ? children : [children];
        return React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { lastItem: index === childArray.length - 1 });
            }
            return child;
        });
    }, [children]);

    return (
        <Content>
            {title && (
                <TitleContainer>
                    <ContentTitle>{title}</ContentTitle>
                    {loading && <TitleLoadingIndicator />}
                </TitleContainer>
            )}
            <ContentContainer>{customChildren}</ContentContainer>
            {informationText && <ContentInformation>{informationText}</ContentInformation>}
        </Content>
    );
};

export default memo(ContentMenu);
