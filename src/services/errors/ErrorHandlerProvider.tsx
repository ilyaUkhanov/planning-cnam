import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler";
import { DoubleActionModal, OneActionModal } from "../../components";
import { ENVIRONMENT_VARIABLES } from "../../constants";
import { BUILD_ENVIRONMENTS, ERROR_MODALS, IHandleErrorParams } from "../../interfaces";
interface IErrorFallbackComponentProps extends FallbackProps {
    params?: IHandleErrorParams;
}

const DEFAULT_ERROR_MODAL_TITLE = "Erreur";

const ErrorFallbackComponent: React.FC<IErrorFallbackComponentProps> = ({ error, resetErrorBoundary, params }) => {
    if (!params) return <OneActionModal title={DEFAULT_ERROR_MODAL_TITLE} message={error.message} onAction={resetErrorBoundary} actionTitle="Ok" />;
    if (params.type === ERROR_MODALS.ONE_ACTION_MODAL) {
        const onAction = () => {
            resetErrorBoundary();
            if (params.parameters.onAction) params.parameters.onAction();
        };
        return (
            <OneActionModal
                title={params.parameters?.title ?? DEFAULT_ERROR_MODAL_TITLE}
                message={params.parameters?.message ?? error.message}
                onAction={onAction}
                actionTitle={params.parameters.actionTitle ?? "Ok"}
            />
        );
    } else if (params.type === ERROR_MODALS.DOUBLE_ACTION_MODAL) {
        const onValidate = () => {
            resetErrorBoundary();
            if (params.parameters.onValidate) params.parameters.onValidate();
        };
        const onDecline = () => {
            resetErrorBoundary();
            if (params.parameters.onDecline) params.parameters.onDecline();
        };
        return (
            <DoubleActionModal
                title={params.parameters?.title ?? DEFAULT_ERROR_MODAL_TITLE}
                message={params.parameters?.message ?? error.message}
                validateActionTitle={params.parameters.validateActionTitle ?? "Valider"}
                onValidate={onValidate}
                declineActionTitle={params.parameters.declineActionTitle ?? "Refuser"}
                onDecline={onDecline}
            />
        );
    }
    return null;
};

interface IErrorHandlerContextType {
    handleError: (error: Error, params?: IHandleErrorParams) => void;
}

const ErrorHandlerContext = createContext<IErrorHandlerContextType | null>(null);

export const ErrorHandlerProvider: React.FC<ReactNode> = ({ children }) => {
    const [error, setError] = useState<Error | null>(null);
    const [handleErrorParams, setHandleErrorParams] = useState<IHandleErrorParams | undefined>(undefined);

    const handleError = (error: Error, params: IHandleErrorParams | undefined) => {
        setHandleErrorParams(params);
        setError(error);
    };

    const resetErrorState = () => {
        setError(null);
        setHandleErrorParams(undefined);
    };

    const disableErrorModal = () => resetErrorState();
    const myErrorHandler = (error: Error, info: { componentStack: string }) => resetErrorState();

    useEffect(() => {
        setJSExceptionHandler((error: Error, isFatal) => {
            setError(error);
        }, ENVIRONMENT_VARIABLES.ENV === BUILD_ENVIRONMENTS.DEV);

        setNativeExceptionHandler((exceptionString) => {
            setError(new Error(exceptionString));
        });
    }, []);

    return (
        <ErrorHandlerContext.Provider value={{ handleError }}>
            <ErrorBoundary FallbackComponent={ErrorFallbackComponent} onError={myErrorHandler}>
                {error && <ErrorFallbackComponent error={error} resetErrorBoundary={disableErrorModal} params={handleErrorParams} />}
                {children}
            </ErrorBoundary>
        </ErrorHandlerContext.Provider>
    );
};

export const useErrorHandler = () => useContext(ErrorHandlerContext) as IErrorHandlerContextType;
