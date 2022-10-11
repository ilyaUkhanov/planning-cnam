import React, { memo, useMemo } from "react";
import { ICON_FAMILIES } from "../../utils/factories/factoryTypes";
import IconFactory from "../../utils/factories/IconFactory";
import { IIconButtonProps } from "../buttonTypes";
import { IconButtonActivityIndicator, IconButtonIcon, IconButtonTouchable } from "./IconButton.styles";

const IconButton: React.FC<IIconButtonProps> = (props) => {
    const {
        name,
        size,
        color,
        loading,
        iconFamily = ICON_FAMILIES.MATERIAL_COMMUNITY_ICONS,
        touchableStyle,
        iconStyle,
        activityIndicatorStyle,
        transparentBackground,
        ...otherProps
    } = props;

    const _IconFamily = useMemo(() => {
        const iconFactory = new IconFactory();
        return iconFactory.create(iconFamily);
    }, [iconFamily]);

    return (
        <IconButtonTouchable {...otherProps} size={size} style={touchableStyle} transparentBackground={transparentBackground}>
            {loading ? <IconButtonActivityIndicator style={activityIndicatorStyle} /> : <IconButtonIcon as={_IconFamily} name={name} size={size} color={color} style={iconStyle} />}
        </IconButtonTouchable>
    );
};

export default memo(IconButton);
