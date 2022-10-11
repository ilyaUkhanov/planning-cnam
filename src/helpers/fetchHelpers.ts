import { IErrorResponse } from "../interfaces";

export const checkStatus = async (response: Response) => {
    if (!response.ok) {
        const errorMessage: IErrorResponse = await response.json();
        throw new Error(errorMessage.error.detailedMessage ?? errorMessage.error.message);
    }
    return await response.json();
};
