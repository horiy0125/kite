import { useMemo } from 'react';
import { envVariables } from '../config/envVariables';
import { useAuth } from './auth';

export const useAccessControl = () => {
  const auth = useAuth();
  const { currentUser } = auth;

  const isUserSignedIn = useMemo(() => {
    return currentUser !== null;
  }, [currentUser]);

  const isAdminUser = useMemo(() => {
    if (currentUser) {
      return currentUser.email === envVariables.ADMIN_USER_EMAIL;
    }

    return false;
  }, [currentUser]);

  return {
    isUserSignedIn,
    isAdminUser,
  };
};
