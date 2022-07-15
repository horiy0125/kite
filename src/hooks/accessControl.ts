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

  return {
    isUserSignedIn,
    isAdminUser,
  };
};
