import { ModalProps } from "react-native-modal";

export interface IOneActionModalProps extends Partial<ModalProps> {
    title?: string;
    message: string;
    onAction: (...args: any) => void;
    actionTitle: string;
}

export interface IDoubleActionModalProps extends Partial<ModalProps> {
    title?: string;
    message: string;
    onValidate: (...args: any) => void;
    onDecline: (...args: any) => void;
    validateActionTitle: string;
    declineActionTitle: string;
}
