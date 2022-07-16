export type CurrentUser = {
  id: number;
  uid: string;
  provider: string;
  email: string;
  name: null;
  nickname: null;
  image: null;
  allowPasswordChange: boolean;
  accessToken: string;
  cacheControl: string;
  client: string;
  expiry: string;
};
