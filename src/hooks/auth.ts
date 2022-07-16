import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { signInApiClient } from '../api/clients/auth';
import { currentUserState } from '../recoil/atoms/auth';
import { CurrentUser } from '../types/auth';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  const signIn = useCallback(
    async (email: string, password: string) => {
      await signInApiClient(email, password)
        .then(res => {
          const data = res.data;

          const user: CurrentUser = {
            id: data.id,
            uid: data.uid,
            provider: data.provider,
            email: data.email,
            name: data.name,
            nickname: data.nickname,
            image: data.image,
            allowPasswordChange: data.allow_password_change,
          };

          setCurrentUser(user);
        })
        .catch(error => {
          console.error(error);
        });
    },
    [setCurrentUser],
  );

  return { currentUser, signIn };
};
