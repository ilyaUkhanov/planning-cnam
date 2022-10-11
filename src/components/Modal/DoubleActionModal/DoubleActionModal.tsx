import React, { memo } from "react";
import { ScrollView } from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "styled-components";
import { ITheme } from "../../../interfaces";
import Paragraph from "../../Text/Paragraph/Paragraph";
import { IDoubleActionModalProps } from "../modalTypes";
import { ModalActionButton, ModalActionButtonText, ModalActions, ModalContent, ModalTitle } from "./DoubleActionModal.styles";

const DoubleActionModal: React.FC<IDoubleActionModalProps> = (props) => {
    const { title, message, validateActionTitle, declineActionTitle, onValidate, onDecline, ...otherProps } = props;
    const theme = useTheme() as ITheme;

    return (
        <Modal {...otherProps} isVisible={true} backdropColor="rgba(0, 0, 0, 0.5)" onBackdropPress={onDecline}>
            <ModalContent>
                {title && <ModalTitle>{title}</ModalTitle>}
                <ScrollView>
                    <Paragraph>{message}</Paragraph>
                </ScrollView>
                <ModalActions>
                    <ModalActionButton
                        onPress={onDecline}
                        touchableStyle={{ backgroundColor: theme.lowest_grey_contrast, width: "48%" }}
                        textStyle={{ color: theme.on_background }}
                    >
                        <ModalActionButtonText>{declineActionTitle}</ModalActionButtonText>
                    </ModalActionButton>
                    <ModalActionButton
                        onPress={onValidate}
                        touchableStyle={{ backgroundColor: theme.lowest_grey_contrast, width: "48%" }}
                        textStyle={{ color: theme.on_background }}
                    >
                        <ModalActionButtonText>{validateActionTitle}</ModalActionButtonText>
                    </ModalActionButton>
                </ModalActions>
            </ModalContent>
        </Modal>
    );
};

export default memo(DoubleActionModal);
