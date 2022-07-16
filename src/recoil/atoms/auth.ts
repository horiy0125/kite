import { atom } from 'recoil';
import { recoilKeys } from '..';
import { CurrentUser } from '../../types/auth';

export const currentUserState = atom<CurrentUser | null>({
  key: recoilKeys.atoms.CURRENT_USER,
  default: null,
});
