import { baseApiInstance } from '..';
import { apiRoutes } from '../../config/apiRoutes';
import {
  AuthRequestHeaders,
  ChangePasswordApiRequest,
  ChangePasswordApiResponse,
  SignInApiRequest,
  SignInApiResponse,
} from '../types/auth';

export const signInApiClient = async (email: string, password: string) => {
  const data: SignInApiRequest = {
    email,
    password,
  };

  const res = await baseApiInstance.post<SignInApiResponse>(
    apiRoutes.v1.auth.signIn,
    data,
  );

  return res;
};

export const changePasswordApiClient = async (
  requestHeaders: AuthRequestHeaders,
  password: string,
  passwordConfirmation: string,
) => {
  const data: ChangePasswordApiRequest = {
    password,
    password_confirmation: passwordConfirmation,
  };

  const res = await baseApiInstance.put<ChangePasswordApiResponse>(
    apiRoutes.v1.auth.changePassword,
    data,
    {
      headers: requestHeaders,
    },
  );

  return res.data;
};
