import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Container, ContentMenu, ContentMenuItem } from "../../../components";
import { ISettingsRootStackNavigatorParamsList } from "../../../interfaces";
import { usePermission } from "../../../services";
import { StyledSwitch } from "./PermissionSettings.styles";

type IPermissionSettingsProps = StackScreenProps<ISettingsRootStackNavigatorParamsList, "PermissionSettings">;

const PermissionSettings: React.FC<IPermissionSettingsProps> = () => {
    const { hasCameraPermission, hasReadStoragePermission, hasWriteStoragePermission, requestCameraPermission, requestReadStorage, requestWriteStorage } = usePermission();

    return (
        <Container variant>
            <ContentMenu>
                <ContentMenuItem
                    label="Permission caméra"
                    value={<StyledSwitch value={hasCameraPermission} onValueChange={requestCameraPermission} disabled={hasCameraPermission} />}
                />
                <ContentMenuItem
                    label="Permission lecture stockage"
                    value={<StyledSwitch value={hasReadStoragePermission} onValueChange={requestReadStorage} disabled={hasReadStoragePermission} />}
                />
                <ContentMenuItem
                    label="Permission écriture stockage"
                    value={<StyledSwitch value={hasWriteStoragePermission} onValueChange={requestWriteStorage} disabled={hasWriteStoragePermission} />}
                />
            </ContentMenu>
        </Container>
    );
};

export default PermissionSettings;
