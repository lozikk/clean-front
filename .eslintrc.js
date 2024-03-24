module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'import/order': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'no-param-reassign': 'off',
    'guard-for-in': 'off',
    'prefer-destructuring': ['error', { object: false, array: false }],
  },
}
