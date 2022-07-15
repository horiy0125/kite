import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { firebaseApp } from '../config/firebase';
import {
  firebaseUserAccessTokenState,
  firebaseUserState,
} from '../recoil/atoms/firebaseAuth';

export const useFirebaseAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

  const [firebaseUser, setFirebaseUser] = useRecoilState(firebaseUserState);
  const [firebaseUserAccessToken, setFirebaseUserAccessToken] = useRecoilState(
    firebaseUserAccessTokenState,
  );

  const signIn = useCallback(() => {
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;
          setFirebaseUserAccessToken(token);

          onAuthStateChanged(auth, user => {
            console.log(user);
            setFirebaseUser(user);
          });
        }
      })
      .catch(error => {
        console.error(error);

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }, [setFirebaseUser, setFirebaseUserAccessToken]);

  return {
    signIn,
    user: firebaseUser,
    accessToken: firebaseUserAccessToken,
  };
};
