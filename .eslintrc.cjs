module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/order': ['error'],
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        quoteProps: 'as-needed',
        trailingComma: 'all',
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
};
