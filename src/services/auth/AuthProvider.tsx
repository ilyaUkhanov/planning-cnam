import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import RNBootSplash from "react-native-bootsplash";
import { useQueryClient } from "react-query";
import { IUser } from "../../interfaces";
import { useDispatch } from "../../redux";
import { changeUsername } from "../../redux/reducers/authSlice";
import { useApi } from "../api/ApiProvider";
import AUTH_API from "../api/fetchs/authApi";

interface IAuthContextType {
    user: IUser | null;
    login: (username: string, password: string) => Promise<Response | undefined>;
    logout: () => void;
}

const AuthContext = createContext<IAuthContextType | null>(null);

export const AuthProvider: React.FC<ReactNode> = ({ children }) => {
    const queryClient = useQueryClient();
    const [user, setUser] = useState<IUser | null>(null);
    const [fetching, setFetching] = useState<boolean>(true);
    const { checkStatus } = useApi();
    const dispatch = useDispatch();

    const login = async (username: string, password: string) => {
        const response = await AUTH_API.login(username, password);
        const user: IUser = await checkStatus(response);
        setUser(user);
        dispatch(changeUsername(user.username));
        return response;
    };

    const whoami = async () => {
        const response = await AUTH_API.whoami();
        if (!response.ok) return logout();
        const user: IUser = await response.json();
        setUser(user);
        return response;
    };

    const logout = async () => {
        setUser(null);
        queryClient.clear();
        return AUTH_API.logout();
    };

    useEffect(() => {
        setFetching(true);
        whoami().finally(() => {
            setFetching(false);
            RNBootSplash.hide({ fade: true });
        });
    }, []);

    return !fetching ? <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider> : null;
};

export const useAuth = () => useContext(AuthContext) as IAuthContextType;
