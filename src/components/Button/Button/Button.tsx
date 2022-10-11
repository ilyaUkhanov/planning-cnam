import React, { memo } from "react";
import { IButtonProps } from "../buttonTypes";
import { ButtonActivityIndicator, ButtonText, ButtonTouchable } from "./Button.styles";

const Button: React.FC<IButtonProps> = (props) => {
    const { children, loading, touchableStyle, textStyle, activityIndicatorStyle, ...otherProps } = props;
    return (
        <ButtonTouchable {...otherProps} disabled={loading} style={touchableStyle}>
            <ButtonText style={textStyle}>{children}</ButtonText>
            {loading && <ButtonActivityIndicator style={activityIndicatorStyle} />}
        </ButtonTouchable>
    );
};

export default memo(Button);
