export type SignInApiRequest = {
  email: string;
  password: string;
};

export type SignInApiResponse = {
  data: {
    id: number;
    uid: string;
    provider: string;
    email: string;
    name: null;
    nickname: null;
    image: null;
    allow_password_change: boolean;
  };
};
