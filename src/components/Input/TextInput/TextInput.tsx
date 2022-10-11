import React, { memo, useMemo, useRef, useState } from "react";
import { TextInput as TextInputNativeComponent } from "react-native";
import { ITextInputProps } from "../inputTypes";
import { FloatingInputButton, StyledTextInput, TextInputButtonIcon, TextInputContainer, TextInputRoot, TextInputTitle } from "./TextInput.styles";

const TextInput = React.forwardRef<TextInputNativeComponent, ITextInputProps>((props, textInputRef) => {
    const { title, secureTextEntry, disableClearButton, value, onChangeText, textInputContainerStyle, textInputStyle, ...otherProps } = props;
    const textRef = useRef(value ?? "");
    textRef.current = value ?? "";
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(secureTextEntry);

    const clearText = () => {
        textRef.current = "";
        _onChangeText("");
    };
    const showPassword = () => setIsPasswordShown((isPasswordShown) => !isPasswordShown);
    const _onChangeText = (newText: string) => {
        textRef.current = newText;
        if (onChangeText) onChangeText(newText);
    };

    const inputHasValue = useMemo(() => (textRef.current ? true : false), [textRef.current]);

    return (
        <TextInputRoot>
            {title && <TextInputTitle>{title}</TextInputTitle>}
            <TextInputContainer isFocused={isFocused} style={textInputContainerStyle}>
                <StyledTextInput
                    {...otherProps}
                    ref={textInputRef}
                    value={textRef.current}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={isPasswordShown}
                    onChangeText={_onChangeText}
                    style={textInputStyle}
                />
                {!disableClearButton && inputHasValue && isFocused && (
                    <FloatingInputButton onPress={clearText}>
                        <TextInputButtonIcon name="close" />
                    </FloatingInputButton>
                )}
                {secureTextEntry && (
                    <FloatingInputButton onPress={showPassword}>
                        <TextInputButtonIcon name={isPasswordShown ? "eye" : "eye-off"} />
                    </FloatingInputButton>
                )}
            </TextInputContainer>
        </TextInputRoot>
    );
});

export default memo(TextInput);
