import type {
  Extends,
  ParserOptions,
  Parsers,
  Plugins,
  RuleOptions,
} from './types';

declare module 'eslint-define-config' {
  export interface CustomExtends extends Extends {}
  export interface CustomPlugins extends Plugins {}
  export interface CustomRuleOptions extends RuleOptions {}
  export interface CustomParsers extends Parsers {}
  export interface CustomParserOptions extends ParserOptions {}
}
