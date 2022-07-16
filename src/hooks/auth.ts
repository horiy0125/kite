import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { changePasswordApiClient, signInApiClient } from '../api/clients/auth';
import { AuthRequestHeaders } from '../api/types/auth';
import { currentUserState } from '../recoil/atoms/auth';
import { CurrentUser } from '../types/auth';
import { CurrentPasswordWrongError } from '../types/error';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  const signIn = useCallback(
    async (email: string, password: string) => {
      await signInApiClient(email, password)
        .then(res => {
          const headers = res.headers;
          const data = res.data.data;

          const user: CurrentUser = {
            id: data.id,
            uid: data.uid,
            provider: data.provider,
            email: data.email,
            name: data.name,
            nickname: data.nickname,
            image: data.image,
            allowPasswordChange: data.allow_password_change,
            accessToken: headers['access-token'],
            cacheControl: headers['cache-control'],
            client: headers['client'],
            expiry: headers['expiry'],
          };

          setCurrentUser(user);
        })
        .catch(error => {
          console.error(error);
        });
    },
    [setCurrentUser],
  );

  const changePassword = useCallback(
    async (
      currentPassword: string,
      newPassword: string,
      newPasswordConfirmation: string,
    ) => {
      if (currentUser) {
        await signInApiClient(currentUser.email, currentPassword)
          .then(async res => {
            const headers = res.headers;

            const requestHeaders: AuthRequestHeaders = {
              'access-token': headers['access-token'],
              client: headers['client'],
              uid: headers['uid'],
            };

            await changePasswordApiClient(
              requestHeaders,
              newPassword,
              newPasswordConfirmation,
            ).then(console.log);
          })
          .catch(error => {
            console.error(error);
            throw new CurrentPasswordWrongError(
              '現在のパスワードが間違っています',
            );
          });
      }
    },
    [currentUser],
  );

  return { currentUser, signIn, changePassword };
};
