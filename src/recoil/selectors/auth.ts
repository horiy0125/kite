import { selector } from 'recoil';
import { recoilKeys } from '..';
import { AuthRequestHeaders } from '../../api/types/auth';
import { currentUserState } from '../atoms/auth';

export const authRequestHeadersState = selector<AuthRequestHeaders | null>({
  key: recoilKeys.selectors.AUTH_REQUEST_HEADERS,
  get: ({ get }) => {
    const currentUser = get(currentUserState);

    if (currentUser) {
      return {
        'access-token': currentUser.accessToken,
        client: currentUser.client,
        uid: currentUser.uid,
      };
    }
    return null;
  },
});
