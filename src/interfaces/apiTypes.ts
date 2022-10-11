interface IErrorResponseError {
    message: string;
    parameter: string;
    errorSlug: string;
    errorCode: number;
    success: boolean;
    detailedMessage: string | null;
}

export interface IErrorResponse {
    code: number;
    error: IErrorResponseError;
}
