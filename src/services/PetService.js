
import { ACCOUNT_ROUTE, PET_ROUTE } from './ApiRoutes.js';
import { deleteRequestWithToken, sendPostRequestWithToken, getRequestWithToken } from './ApiService.js';
import { getJwtPayload } from './JwtService.js';

export const createPet = async (body) => {
    const response = await sendPostRequestWithToken(
        PET_ROUTE,
        JSON.stringify(body));
    return response;
}

export const getPetsFromOwnerId = async () => {
    const payload = getJwtPayload();
    const accountId = payload.AccountId;
    const url = ACCOUNT_ROUTE + "/" + accountId + "/pets";
    const response = await getRequestWithToken(url); 
    return response;
}

export const deletePetById = async (petId) => {
    const url = PET_ROUTE + "/" + petId;
    const response = await deleteRequestWithToken(url);
    return response;
}
