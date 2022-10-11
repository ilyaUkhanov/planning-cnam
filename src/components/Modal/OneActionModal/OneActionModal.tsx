import React, { memo } from "react";
import { ScrollView } from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "styled-components";
import { ITheme } from "../../../interfaces";
import Paragraph from "../../Text/Paragraph/Paragraph";
import { IOneActionModalProps } from "../modalTypes";
import { ModalActionButton, ModalActionButtonText, ModalContent, ModalTitle } from "./OneActionModal.styles";

const OneActionModal: React.FC<IOneActionModalProps> = (props) => {
    const { title, message, actionTitle, onAction, ...otherProps } = props;
    const theme = useTheme() as ITheme;

    return (
        <Modal {...otherProps} isVisible={true} backdropColor="rgba(0, 0, 0, 0.5)" onBackdropPress={onAction}>
            <ModalContent>
                {title && <ModalTitle>{title}</ModalTitle>}
                <ScrollView>
                    <Paragraph>{message}</Paragraph>
                </ScrollView>
                <ModalActionButton onPress={onAction} touchableStyle={{ backgroundColor: theme.lowest_grey_contrast }} textStyle={{ color: theme.on_background }}>
                    <ModalActionButtonText>{actionTitle}</ModalActionButtonText>
                </ModalActionButton>
            </ModalContent>
        </Modal>
    );
};

export default memo(OneActionModal);
