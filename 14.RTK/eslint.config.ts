import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default {
  ignores: ['dist'],
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      plugins: {
        react,
        reactHooks,
        reactRefresh,
        prettier,
        '@typescript-eslint': tsPlugin,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      languageOptions: {
        globals: globals.browser,
      },
      rules: {
        'func-style': ['error', 'expression'],
        'prefer-arrow-callback': ['error'],
        'arrow-body-style': ['error', 'as-needed'],
        complexity: ['error', 5],
        curly: ['error', 'multi-line'],
        'max-lines': ['error', 255],
        'react/display-name': 'off',
        'react/jsx-fragments': ['warn', 'element'],
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'warn',
        'prettier/prettier': 'error',
      },
      settings: { react: { version: 'detect' } },
      extends: [
        js.configs.recommended,
        'plugin:@typescript-eslint/recommended',
        reactHooks.configs['recommended-latest'],
        (reactRefresh as any).configs.vite,
        'plugin:prettier/recommended',
      ],
    },
  ],
};
