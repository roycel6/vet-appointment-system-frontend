import { ACCOUNT_ROUTE, APPOINTMENT_ROUTE } from './ApiRoutes.js';
import { getJwtPayload } from './JwtService.js';
import { getRequestWithToken, sendPostRequestWithToken } from './ApiService.js';

export const getAppointmentsByAccountId = async () => {
    const payload = getJwtPayload();
    const accountId = payload.AccountId;
    const url = ACCOUNT_ROUTE + '/' + accountId + '/' + 'appointment';
    console.log(url);
    const response = await getRequestWithToken(url);
    return response;
}

export const createAppointment = async (body) => {
    const response = await sendPostRequestWithToken(APPOINTMENT_ROUTE, JSON.stringify(body));
    return response;
}
