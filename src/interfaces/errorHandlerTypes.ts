export enum ERROR_MODALS {
    ONE_ACTION_MODAL,
    DOUBLE_ACTION_MODAL,
}

interface ICustomOneActionModalProps {
    title?: string;
    message?: string;
    actionTitle?: string;
    onAction?: () => void;
}

interface ICustomDoubleActionModalProps {
    title?: string;
    message?: string;
    validateActionTitle?: string;
    declineActionTitle?: string;
    onValidate?: () => void;
    onDecline?: () => void;
}

export type IHandleErrorParams =
    | {
          type: ERROR_MODALS.ONE_ACTION_MODAL;
          parameters: ICustomOneActionModalProps;
      }
    | {
          type: ERROR_MODALS.DOUBLE_ACTION_MODAL;
          parameters: ICustomDoubleActionModalProps;
      };
