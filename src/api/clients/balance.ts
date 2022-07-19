import { baseApiInstance } from '..';
import { apiRoutes } from '../../config/apiRoutes';
import type { AuthRequestHeaders } from '../types/auth';

export const getBalancesApiClient = async (
  requestHeaders: AuthRequestHeaders,
) => {
  const res = await baseApiInstance.get(apiRoutes.v1.balance.balance, {
    headers: requestHeaders,
  });

  return res.data;
};
