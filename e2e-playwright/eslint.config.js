// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommendedConfig: js.configs.recommended,
});

export default [
  // Ignore files and folders that shouldn't be linted
  {
    ignores: ['node_modules/**', 'playwright-report/**', 'test-results/**'],
  },

  // Base JS configuration and Prettier
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:playwright/playwright-test'),
  ...compat.extends('prettier'),

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    rules: {
      // General code quality rules
      'no-async-promise-executor': 'error',
      'no-unused-vars': 'warn',
      'no-empty': 'warn',
      'no-useless-assignment': 'warn',
      'no-fallthrough': 'warn',

      // Let Prettier handle code style
      'prettier/prettier': 'off',

      // Playwright-specific rules
      'playwright/expect-expect': 'off', // turn off if using asserts inside Page Objects
      'playwright/valid-title': [
        'error',
        {
          mustMatch: {
            test: ['^@(smoke|regression)', 'Test title must start with @smoke or @regression'],
            describe: '.*', // allow any describe title, no message
          },
        },
      ],
      'playwright/no-focused-test': 'error', // prevent test.only / describe.only
      'playwright/no-wait-for-timeout': 'error', // prevent waitForTimeout()
      'playwright/prefer-locator': 'warn', // enforce using locators instead of page.click/fill
    },
  },
];
