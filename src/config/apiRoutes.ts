export const apiRoutes = {
  healthCheck: '/health_check',

  v1: {
    auth: {
      signIn: '/v1/auth/sign_in',
      changePassword: '/v1/auth/password',
    },
    balance: {
      balance: '/v1/balance',
      monthlyBalances: 'v1/monthly_balances',
      receipts: '/v1/receipts',
      expenses: '/v1/expenses',
    },
  },
} as const;
