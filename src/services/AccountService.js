
import { AUTHENTICATE_ROUTE, REGISTER_ROUTE } from './ApiRoutes.js';
import { sendPostRequest } from './ApiService.js';

export const authenticateCredentials = async (body) => {
    const response = await sendPostRequest(
        AUTHENTICATE_ROUTE,
        JSON.stringify(body));
    return response;
};

export const registerAccount = async (body) => {
    const response = await sendPostRequest(
        REGISTER_ROUTE,
        JSON.stringify(body));
    return response;
}

