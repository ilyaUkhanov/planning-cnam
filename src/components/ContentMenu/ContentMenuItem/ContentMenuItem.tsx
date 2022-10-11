import React, { memo, useMemo } from "react";
import { ICON_FAMILIES } from "../../utils/factories/factoryTypes";
import IconFactory from "../../utils/factories/IconFactory";
import { IContentMenuItemProps } from "../contentMenuTypes";
import { ItemContainer, ItemLabel, ItemValue, LeftIconComponent, LinkIcon } from "./ContentMenuItem.styles";

const ContentMenuItem: React.FC<IContentMenuItemProps> = (props) => {
    const {
        label,
        value,
        lastItem,
        leftIconName,
        link,
        action,
        remove,
        disabled,
        leftIconFamily = ICON_FAMILIES.MATERIAL_COMMUNITY_ICONS,
        onPress,
        onLongPress,
        onPressIn,
        onPressOut,
        ...otherProps
    } = props;
    const isItemDisabled = disabled || (!onPress && !onLongPress && !onPressIn && !onPressOut);

    const IconFamily = useMemo(() => {
        const iconFactory = new IconFactory();
        return iconFactory.create(leftIconFamily);
    }, [leftIconFamily]);

    const labelComponent = useMemo(() => {
        if (!label) return;
        return typeof label === "string" ? (
            <ItemLabel action={action} remove={remove}>
                {label}
            </ItemLabel>
        ) : (
            label
        );
    }, [label, action, remove]);

    const valueComponent = useMemo(() => {
        if (!value) return;
        return typeof value === "string" ? <ItemValue>{value}</ItemValue> : value;
    }, [value]);

    return (
        <ItemContainer {...otherProps} disabled={isItemDisabled} lastItem={lastItem} onPress={onPress} onLongPress={onLongPress} onPressIn={onPressIn} onPressOut={onPressOut}>
            {leftIconName && <LeftIconComponent as={IconFamily} name={leftIconName} size={18} />}
            {labelComponent}
            {valueComponent}
            {link && <LinkIcon name="chevron-right" size={24} />}
        </ItemContainer>
    );
};

export default memo(ContentMenuItem);
