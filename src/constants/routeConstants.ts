import { ENVIRONMENT_VARIABLES } from "./envConstants";

const DOMAINS = {
    PROD: "",
    TEST: "",
    DEV: "http://172.21.0.212:8000",
};

//! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const DOMAIN_NO_API = DOMAINS[ENVIRONMENT_VARIABLES.ENV];
//! ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

const DOMAIN = `${DOMAIN_NO_API}/api`;

const ROUTES = {
    LOGIN: `${DOMAIN}/login`,
    LOGOUT: `${DOMAIN}/logout`,
    WHOAMI: `${DOMAIN}/whoami`,
};

export default ROUTES;
