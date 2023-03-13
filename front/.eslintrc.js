module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'import',
    'simple-import-sort',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [['@/', 'src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'react/prop-types': 0,
    'linebreak-style': 0,
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'import/prefer-default-export': 'off',
    'no-plusplus': 0,
    'max-classes-per-file': 0,
    'react/no-array-index-key': 0,
    'consistent-return': 0,
    'no-restricted-syntax': 0,
    'array-callback-return': 0,
    'default-case': 0,
    'react/prefer-stateless-function': 0,
    'import/extensions': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
    'react/require-default-props': 0,
    'no-shadow': 0,
    'import/no-cycle': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/react-in-jsx-scope': 0,
    'default-param-last': 0,
    'no-alert': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/no-unescaped-entities': 0,
    'react/state-in-constructor': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react'], ['^@?\\w'], ['@/(.*)'], ['^[./]']],
      },
    ],
    'simple-import-sort/exports': 'error',
    'react/jsx-props-no-spreading': 0,
    'import/no-import-module-exports': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
};
