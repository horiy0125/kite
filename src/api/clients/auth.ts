import { baseApiInstance } from '..';
import { apiRoutes } from '../../config/apiRoutes';
import { SignInApiRequest, SignInApiResponse } from '../types/auth';

export const signInApiClient = async (email: string, password: string) => {
  const data: SignInApiRequest = {
    email,
    password,
  };

  const res = await baseApiInstance.post<SignInApiResponse>(
    apiRoutes.v1.auth.signIn,
    data,
  );

  return res.data;
};
