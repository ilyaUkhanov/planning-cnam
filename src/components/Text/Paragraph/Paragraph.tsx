import React, { memo } from "react";
import { IParagraphProps } from "../textTypes";
import { StyledText } from "./Paragraph.styles";

const Paragraph: React.FC<IParagraphProps> = (props) => {
    const { children, style, ...otherProps } = props;
    return (
        <StyledText {...otherProps} style={style}>
            {children}
        </StyledText>
    );
};

export default memo(Paragraph);
