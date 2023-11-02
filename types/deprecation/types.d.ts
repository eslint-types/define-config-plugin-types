import type { DeprecationRuleOptions } from './rules/deprecation';

export interface Extends {
  'plugin:deprecation/recommended': void;
}

export interface Plugins {
  deprecation: void;
}

export interface RuleOptions {
  /**
   * Do not use deprecated APIs.
   *
   * @see [deprecation](https://github.com/gund/eslint-plugin-deprecation)
   */
  'deprecation/deprecation': DeprecationRuleOptions;
}
