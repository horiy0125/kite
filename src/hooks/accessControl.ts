import { useMemo } from 'react';
import { envVariables } from '../config/envVariables';
import { useFirebaseAuth } from './firebaseAuth';

export const useAccessControl = () => {
  const firebaseAuth = useFirebaseAuth();
  const { user } = firebaseAuth;

  const isUserSignedIn = useMemo(() => {
    return user !== undefined;
  }, [user]);

  const isAdminUser = useMemo(() => {
    if (user) {
      return user.email === envVariables.ADMIN_USER_EMAIL;
    }

    return false;
  }, [user]);

  const isAllowedUser = useMemo(() => {
    if (user) {
      return user.email === envVariables.ALLOWED_USER_EMAIL;
    }
  }, [user]);

  return {
    isUserSignedIn,
    isAdminUser,
    isAllowedUser,
  };
};
