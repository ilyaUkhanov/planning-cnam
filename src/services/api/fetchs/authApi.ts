import { JSON_HEADERS, ROUTES } from "../../../constants";

const AUTH_API = {
    login: (username: string, password: string) => {
        return fetch(ROUTES.LOGIN, {
            method: "POST",
            headers: JSON_HEADERS,
            body: JSON.stringify({ username, password }),
        });
    },
    whoami: () => {
        return fetch(ROUTES.WHOAMI, {
            method: "GET",
            headers: JSON_HEADERS,
        });
    },
    logout: () => {
        return fetch(ROUTES.LOGOUT);
    },
};

export default AUTH_API;
