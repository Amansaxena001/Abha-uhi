import axios, { AxiosInstance } from 'axios';

export const apiV1: AxiosInstance = axios.create({
    baseURL: process.env.base_URL,
    timeout: 30000,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});
type IError = {
    message: string;
    code: number | string;
};
export const _getError = (err: any): IError => {
    let errorMessage = err.messsage;
    let errorCode = '000000';
    if (err && err.response && err.response.data && err.response.data.error) {
        errorMessage = err.response.data.error.message;
        errorCode = err.response.data.error.code;
    }
    return {
        message: errorMessage,
        code: errorCode
    };
};
