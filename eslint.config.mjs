import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import emotion from 'eslint-plugin-emotion';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      emotion,
    },
    rules: {
      ...react.configs['recommended'].rules, // Uncomment this line
      ...reactHooks.configs['recommended'].rules, // Uncomment this line
      'emotion/jsx-import': 'always',
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
