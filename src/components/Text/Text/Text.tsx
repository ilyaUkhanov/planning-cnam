import React, { memo } from "react";
import { ITextProps } from "../textTypes";
import { StyledText } from "./Text.styles";

const Text: React.FC<ITextProps> = (props) => {
    const { children, style, ...otherProps } = props;
    return (
        <StyledText {...otherProps} style={style}>
            {children}
        </StyledText>
    );
};

export default memo(Text);
