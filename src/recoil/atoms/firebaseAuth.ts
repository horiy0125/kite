import { atom } from 'recoil';
import type { User } from 'firebase/auth';
import { recoilKeys } from '..';

export const firebaseUserState = atom<User | undefined>({
  key: recoilKeys.atoms.FIREBASE_USER,
  default: undefined,
  dangerouslyAllowMutability: true,
});

export const firebaseAccessTokenState = atom<string | undefined>({
  key: recoilKeys.atoms.FIREBASE_ACCESS_TOKEN,
  default: undefined,
});
