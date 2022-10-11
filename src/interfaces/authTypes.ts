export interface IUser {
    id: number;
    username: string;
    firstname: string;
    name: string;
    roles: string[];
    PHPSESSID: string;
    enabled: boolean;
}
