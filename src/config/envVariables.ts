export const envVariables = {
  MODE: import.meta.env.MODE,
  BASE_URL: import.meta.env.BASE_URL,

  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  ADMIN_USER_EMAIL: import.meta.env.VITE_ADMIN_USER_EMAIL,
} as const;
