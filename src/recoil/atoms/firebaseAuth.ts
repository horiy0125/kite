import type { User } from 'firebase/auth';
import { atom } from 'recoil';
import { recoilKeys } from '..';

export const firebaseUserState = atom<User | undefined>({
  key: recoilKeys.atoms.FIREBASE_USER,
  default: undefined,
});

export const firebaseUserAccessTokenState = atom<string | undefined>({
  key: recoilKeys.atoms.FIREBASE_USER_ACCESS_TOKEN,
  default: undefined,
});
