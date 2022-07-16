export const pageRoutes = {
  index: '/',

  signin: '/sign_in',

  account: {
    index: '/account',

    edit: '/account/edit',
    changePassword: '/account/change_password',
  },
} as const;
