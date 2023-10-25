import type { PrettierRuleOptions } from './rules/prettier';

declare module 'eslint-define-config' {
  export interface CustomExtends {
    'plugin:prettier/recommended': void;
  }

  export interface CustomPlugins {
    prettier: void;
  }

  export interface CustomRuleOptions {
    /**
     * undefined
     *
     * @see [prettier](https://github.com/prettier/eslint-plugin-prettier#options)
     */
    'prettier/prettier': PrettierRuleOptions;
  }
}
