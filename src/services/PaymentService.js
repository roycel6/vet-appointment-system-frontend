import { ACCOUNT_ROUTE } from './ApiRoutes.js';
import { getRequestWithToken } from './ApiService.js';
import { getJwtPayload } from './JwtService.js';

export const getBalanceByAccountId = async () => {
  const payload = getJwtPayload();
  const accountId = payload.AccountId;
  const url = ACCOUNT_ROUTE + '/' + accountId + '/balance';
  const response = await getRequestWithToken(url);
  return response;
}

export const getTransactionsByAccountId = async () => {
  const payload = getJwtPayload();
  const accountId = payload.AccountId;
  const url = ACCOUNT_ROUTE + '/' + accountId + '/transaction';
  const response = await getRequestWithToken(url);
  return response;

}
