import type { PrettierRuleOptions } from './rules/prettier';

export interface Extends {
  'plugin:prettier/recommended': void;
}

export interface Plugins {
  prettier: void;
}

export interface RuleOptions {
  /**
   * undefined
   *
   * @see [prettier](https://github.com/prettier/eslint-plugin-prettier#options)
   */
  'prettier/prettier': PrettierRuleOptions;
}
