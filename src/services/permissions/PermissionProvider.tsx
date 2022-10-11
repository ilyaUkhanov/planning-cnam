import React, { createContext, ReactNode, useContext, useState } from "react";
import { Linking, PermissionsAndroid } from "react-native";
import { ERROR_MODALS } from "../../interfaces";
import { useErrorHandler } from "../errors/ErrorHandlerProvider";

interface IPermissionContextType {
    hasCameraPermission: boolean;
    hasReadStoragePermission: boolean;
    hasWriteStoragePermission: boolean;
    requestCameraPermission: () => Promise<void>;
    requestReadStorage: () => Promise<void>;
    requestWriteStorage: () => Promise<void>;
}

const PermissionContext = createContext<IPermissionContextType | null>(null);

const PERMISSION_DENIED_ERROR_MESSAGE = "Les permissions de : '__PERMISSION_NAME__', ont été désactivées et ne peuvent être réactivées que depuis les réglages du téléphone.";

export const PermissionProvider: React.FC<ReactNode> = ({ children }) => {
    const { handleError } = useErrorHandler();
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false);
    const [hasReadStoragePermission, setHasReadStoragePermission] = useState<boolean>(false);
    const [hasWriteStoragePermission, setHasWriteStoragePermission] = useState<boolean>(false);

    const handlePermissionError = (error: Error) => {
        handleError(error, {
            type: ERROR_MODALS.DOUBLE_ACTION_MODAL,
            parameters: {
                validateActionTitle: "Accéder aux réglages",
                declineActionTitle: "Plus tard",
                onValidate: () => Linking.openSettings(),
            },
        });
    };

    const requestCameraPermission = async () => {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
            title: "Autorisation de l'utilisation de la caméra",
            message: "L'application a besoin d'utiliser l'appareil photo pour pouvoir prendre des photos. Voulez vous autoriser l'utilisation de l'appareil photo ?",
            buttonNegative: "Refuser",
            buttonPositive: "Accepter",
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) return setHasCameraPermission(true);
        handlePermissionError(new Error(PERMISSION_DENIED_ERROR_MESSAGE.replace("__PERMISSION_NAME__", "Caméra")));
    };

    const requestReadStorage = async () => {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
            title: "Autorisation d'accéder à la galerie du téléphone",
            message: "L'application a besoin d'accéder à la galerie du téléphone pour pouvoir partager une photo sur la messagerie.",
            buttonNegative: "Refuser",
            buttonPositive: "Accepter",
        });

        if (granted === PermissionsAndroid.RESULTS.GRANTED) return setHasReadStoragePermission(true);
        handlePermissionError(new Error(PERMISSION_DENIED_ERROR_MESSAGE.replace("__PERMISSION_NAME__", "Accès aux photos et à la galerie")));
    };

    const requestWriteStorage = async () => {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
            title: "Autorisation d'enregistrer sur le téléphone",
            message: "L'application a besoin d'enregistrer sur le téléphone pour pouvoir partager un élément depuis la messagerie ou pour pouvoir télécharger des photos.",
            buttonNegative: "Refuser",
            buttonPositive: "Accepter",
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) return setHasWriteStoragePermission(true);
        handlePermissionError(new Error(PERMISSION_DENIED_ERROR_MESSAGE.replace("__PERMISSION_NAME__", "Accès aux photos et à la galerie")));
    };

    const requestAllPermission = async () => {
        await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then((permission) => {
            setHasCameraPermission(permission);
            if (!permission) return requestCameraPermission();
        });
        await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then((permission) => {
            setHasWriteStoragePermission(permission);
            if (!permission) return requestWriteStorage();
        });
        await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then((permission) => {
            setHasReadStoragePermission(permission);
            if (!permission) return requestReadStorage();
        });
    };
    
    return (
        <PermissionContext.Provider
            value={{
                hasCameraPermission,
                hasReadStoragePermission,
                hasWriteStoragePermission,
                requestCameraPermission,
                requestReadStorage,
                requestWriteStorage,
            }}
        >
            {children}
        </PermissionContext.Provider>
    );
};

export const usePermission = () => useContext(PermissionContext) as IPermissionContextType;
