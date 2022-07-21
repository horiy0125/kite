import { baseApiInstance } from '..';
import { apiRoutes } from '../../config/apiRoutes';
import type { AuthRequestHeaders } from '../types/auth';
import { GetBalancesApiResponse } from '../types/balance';

export const getBalancesApiClient = async (
  requestHeaders: AuthRequestHeaders,
  year: number,
  month: number,
) => {
  const queryString = new URLSearchParams({
    year: String(year),
    month: String(month),
  });

  const path = `${apiRoutes.v1.balance.balance}?${queryString}`;

  const res = await baseApiInstance.get<GetBalancesApiResponse>(path, {
    headers: requestHeaders,
  });

  return res.data;
};
