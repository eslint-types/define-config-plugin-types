export type FormatOptionsConfig = PredefinedFormats[] | null;
export type PredefinedFormats =
  | 'camelCase'
  | 'strictCamelCase'
  | 'PascalCase'
  | 'StrictPascalCase'
  | 'snake_case'
  | 'UPPER_CASE';
export type UnderscoreOptions =
  | 'forbid'
  | 'allow'
  | 'require'
  | 'requireDouble'
  | 'allowDouble'
  | 'allowSingleOrDouble';
export type PrefixSuffixConfig = string[];
export type TypeModifiers =
  | 'boolean'
  | 'string'
  | 'number'
  | 'function'
  | 'array';
export type Schema0 = Array<
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: Array<
        | 'default'
        | 'variableLike'
        | 'memberLike'
        | 'typeLike'
        | 'method'
        | 'property'
        | 'variable'
        | 'function'
        | 'parameter'
        | 'parameterProperty'
        | 'accessor'
        | 'enumMember'
        | 'classMethod'
        | 'objectLiteralMethod'
        | 'typeMethod'
        | 'classProperty'
        | 'objectLiteralProperty'
        | 'typeProperty'
        | 'class'
        | 'interface'
        | 'typeAlias'
        | 'enum'
        | 'typeParameter'
        | 'import'
      >;
      modifiers?: Array<
        | 'const'
        | 'readonly'
        | 'static'
        | 'public'
        | 'protected'
        | 'private'
        | '#private'
        | 'abstract'
        | 'destructured'
        | 'global'
        | 'exported'
        | 'unused'
        | 'requiresQuotes'
        | 'override'
        | 'async'
        | 'default'
        | 'namespace'
      >;
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'default';
      modifiers?: Array<
        | 'const'
        | 'readonly'
        | 'static'
        | 'public'
        | 'protected'
        | 'private'
        | '#private'
        | 'abstract'
        | 'destructured'
        | 'global'
        | 'exported'
        | 'unused'
        | 'requiresQuotes'
        | 'override'
        | 'async'
        | 'default'
        | 'namespace'
      >;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'variableLike';
      modifiers?: Array<'unused' | 'async'>;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'variable';
      modifiers?: Array<
        'const' | 'destructured' | 'exported' | 'global' | 'unused' | 'async'
      >;
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'function';
      modifiers?: Array<'exported' | 'global' | 'unused' | 'async'>;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'parameter';
      modifiers?: Array<'destructured' | 'unused'>;
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'memberLike';
      modifiers?: Array<
        | 'abstract'
        | 'private'
        | '#private'
        | 'protected'
        | 'public'
        | 'readonly'
        | 'requiresQuotes'
        | 'static'
        | 'override'
        | 'async'
      >;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'classProperty';
      modifiers?: Array<
        | 'abstract'
        | 'private'
        | '#private'
        | 'protected'
        | 'public'
        | 'readonly'
        | 'requiresQuotes'
        | 'static'
        | 'override'
      >;
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'objectLiteralProperty';
      modifiers?: Array<'public' | 'requiresQuotes'>;
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'typeProperty';
      modifiers?: Array<'public' | 'readonly' | 'requiresQuotes'>;
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'parameterProperty';
      modifiers?: Array<'private' | 'protected' | 'public' | 'readonly'>;
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'property';
      modifiers?: Array<
        | 'abstract'
        | 'private'
        | '#private'
        | 'protected'
        | 'public'
        | 'readonly'
        | 'requiresQuotes'
        | 'static'
        | 'override'
        | 'async'
      >;
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'classMethod';
      modifiers?: Array<
        | 'abstract'
        | 'private'
        | '#private'
        | 'protected'
        | 'public'
        | 'requiresQuotes'
        | 'static'
        | 'override'
        | 'async'
      >;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'objectLiteralMethod';
      modifiers?: Array<'public' | 'requiresQuotes' | 'async'>;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'typeMethod';
      modifiers?: Array<'public' | 'requiresQuotes'>;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'method';
      modifiers?: Array<
        | 'abstract'
        | 'private'
        | '#private'
        | 'protected'
        | 'public'
        | 'requiresQuotes'
        | 'static'
        | 'override'
        | 'async'
      >;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'accessor';
      modifiers?: Array<
        | 'abstract'
        | 'private'
        | 'protected'
        | 'public'
        | 'requiresQuotes'
        | 'static'
        | 'override'
      >;
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'enumMember';
      modifiers?: Array<'requiresQuotes'>;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'typeLike';
      modifiers?: Array<'abstract' | 'exported' | 'unused'>;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'class';
      modifiers?: Array<'abstract' | 'exported' | 'unused'>;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'interface';
      modifiers?: Array<'exported' | 'unused'>;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'typeAlias';
      modifiers?: Array<'exported' | 'unused'>;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'enum';
      modifiers?: Array<'exported' | 'unused'>;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'typeParameter';
      modifiers?: Array<'unused'>;
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'import';
      modifiers?: Array<'default' | 'namespace'>;
    }
>;

export interface MatchRegexConfig {
  match: boolean;
  regex: string;
}

export type NamingConventionRuleOptions = Schema0;
