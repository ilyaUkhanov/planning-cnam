import NetInfo from "@react-native-community/netinfo";
import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { checkStatus } from "../../helpers";
import { useErrorHandler } from "../errors/ErrorHandlerProvider";

interface IApiContextType {
    useFetch: (apiCall: CallableFunction) => Promise<any>;
    isInternetReachable: boolean | null;
    checkStatus: (response: Response) => Promise<any>;
}

const ApiContext = createContext<IApiContextType | null>(null);

export const ApiProvider: React.FC<ReactNode> = ({ children }) => {
    const { handleError } = useErrorHandler();

    const [isInternetReachable, setIsInternetReachable] = useState<boolean | null>(true);
    const isInternetReachableRef = useRef<boolean | null>(isInternetReachable);
    isInternetReachableRef.current = isInternetReachable;

    const _checkStatus = async (response: Response) => {
        return checkStatus(response).catch((error: Error) => handleError(error));
    };

    const useFetch = async (apiCall: CallableFunction, disableRequestErrorCatch: boolean = false): Promise<any> => {
        if (!isInternetReachableRef.current) {
            const errorMessage = "Aucune connection internet détecté";
            handleError(new Error(errorMessage));
            return Promise.reject(errorMessage);
        }
        if (disableRequestErrorCatch) return apiCall().then(_checkStatus);
        return apiCall()
            .then(_checkStatus)
            .catch((error: Error) => {
                handleError(error);
                return Promise.reject(error.message);
            });
    };

    const listenInternetReachability = () => {
        return NetInfo.addEventListener((state) => {
            setIsInternetReachable(state.isInternetReachable);
        });
    };

    useEffect(() => {
        if (isInternetReachable) null; // Mode en ligne;
        if (!isInternetReachable) null; // Mode hors ligne;
    }, [isInternetReachable]);

    useEffect(() => {
        const unsubscribe = listenInternetReachability();
        return () => unsubscribe();
    }, []);

    return <ApiContext.Provider value={{ useFetch, isInternetReachable, checkStatus: _checkStatus }}>{children}</ApiContext.Provider>;
};

export const useApi = () => useContext(ApiContext) as IApiContextType;
