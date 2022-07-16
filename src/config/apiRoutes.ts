export const apiRoutes = {
  healthCheck: '/health_check',

  v1: {
    auth: {
      signIn: '/v1/auth/sign_in',
    },
  },
} as const;
