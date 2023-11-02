import type { Extends, Plugins, RuleOptions, Settings } from './types';

declare module 'eslint-define-config' {
  export interface CustomExtends extends Extends {}
  export interface CustomPlugins extends Plugins {}
  export interface CustomRuleOptions extends RuleOptions {}
  export interface CustomSettings extends Settings {}
}
