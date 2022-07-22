import { useCallback } from 'react';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useRecoilState } from 'recoil';
import { firebaseApp } from '../config/firebase';
import {
  firebaseAccessTokenState,
  firebaseUserState,
} from '../recoil/atoms/firebaseAuth';

export const useFirebaseAuth = () => {
  const [user, setUser] = useRecoilState(firebaseUserState);
  const [accessToken, setAccessToken] = useRecoilState(
    firebaseAccessTokenState,
  );

  const signIn = useCallback(async () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth(firebaseApp);
    auth.languageCode = 'jp';

    await signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          setUser(result.user);

          const token = credential.accessToken;
          setAccessToken(token);
        }
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.error(error);
      });
  }, [setUser, setAccessToken]);

  const signOutAndClearStates = useCallback(async () => {
    const auth = getAuth(firebaseApp);
    auth.languageCode = 'jp';

    await signOut(auth)
      .then(() => {
        setUser(undefined);
        setAccessToken(undefined);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return { user, accessToken, signIn, signOutAndClearStates };
};
