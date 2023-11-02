import type { CheckAccessRuleOptions } from './rules/check-access';
import type { CheckAlignmentRuleOptions } from './rules/check-alignment';
import type { CheckExamplesRuleOptions } from './rules/check-examples';
import type { CheckIndentationRuleOptions } from './rules/check-indentation';
import type { CheckLineAlignmentRuleOptions } from './rules/check-line-alignment';
import type { CheckParamNamesRuleOptions } from './rules/check-param-names';
import type { CheckPropertyNamesRuleOptions } from './rules/check-property-names';
import type { CheckSyntaxRuleOptions } from './rules/check-syntax';
import type { CheckTagNamesRuleOptions } from './rules/check-tag-names';
import type { CheckTypesRuleOptions } from './rules/check-types';
import type { CheckValuesRuleOptions } from './rules/check-values';
import type { EmptyTagsRuleOptions } from './rules/empty-tags';
import type { ImplementsOnClassesRuleOptions } from './rules/implements-on-classes';
import type { ImportsAsDependenciesRuleOptions } from './rules/imports-as-dependencies';
import type { InformativeDocsRuleOptions } from './rules/informative-docs';
import type { MatchDescriptionRuleOptions } from './rules/match-description';
import type { MatchNameRuleOptions } from './rules/match-name';
import type { MultilineBlocksRuleOptions } from './rules/multiline-blocks';
import type { NoBadBlocksRuleOptions } from './rules/no-bad-blocks';
import type { NoBlankBlockDescriptionsRuleOptions } from './rules/no-blank-block-descriptions';
import type { NoBlankBlocksRuleOptions } from './rules/no-blank-blocks';
import type { NoDefaultsRuleOptions } from './rules/no-defaults';
import type { NoMissingSyntaxRuleOptions } from './rules/no-missing-syntax';
import type { NoMultiAsterisksRuleOptions } from './rules/no-multi-asterisks';
import type { NoRestrictedSyntaxRuleOptions } from './rules/no-restricted-syntax';
import type { NoTypesRuleOptions } from './rules/no-types';
import type { NoUndefinedTypesRuleOptions } from './rules/no-undefined-types';
import type { RequireAsteriskPrefixRuleOptions } from './rules/require-asterisk-prefix';
import type { RequireDescriptionRuleOptions } from './rules/require-description';
import type { RequireDescriptionCompleteSentenceRuleOptions } from './rules/require-description-complete-sentence';
import type { RequireExampleRuleOptions } from './rules/require-example';
import type { RequireFileOverviewRuleOptions } from './rules/require-file-overview';
import type { RequireHyphenBeforeParamDescriptionRuleOptions } from './rules/require-hyphen-before-param-description';
import type { RequireJsdocRuleOptions } from './rules/require-jsdoc';
import type { RequireParamRuleOptions } from './rules/require-param';
import type { RequireParamDescriptionRuleOptions } from './rules/require-param-description';
import type { RequireParamNameRuleOptions } from './rules/require-param-name';
import type { RequireParamTypeRuleOptions } from './rules/require-param-type';
import type { RequirePropertyRuleOptions } from './rules/require-property';
import type { RequirePropertyDescriptionRuleOptions } from './rules/require-property-description';
import type { RequirePropertyNameRuleOptions } from './rules/require-property-name';
import type { RequirePropertyTypeRuleOptions } from './rules/require-property-type';
import type { RequireReturnsRuleOptions } from './rules/require-returns';
import type { RequireReturnsCheckRuleOptions } from './rules/require-returns-check';
import type { RequireReturnsDescriptionRuleOptions } from './rules/require-returns-description';
import type { RequireReturnsTypeRuleOptions } from './rules/require-returns-type';
import type { RequireThrowsRuleOptions } from './rules/require-throws';
import type { RequireYieldsRuleOptions } from './rules/require-yields';
import type { RequireYieldsCheckRuleOptions } from './rules/require-yields-check';
import type { SortTagsRuleOptions } from './rules/sort-tags';
import type { TagLinesRuleOptions } from './rules/tag-lines';
import type { TextEscapingRuleOptions } from './rules/text-escaping';
import type { ValidTypesRuleOptions } from './rules/valid-types';
export type { Settings } from './settings';

export interface Extends {
  'plugin:jsdoc/recommended': void;
  'plugin:jsdoc/recommended-error': void;
  'plugin:jsdoc/recommended-typescript': void;
  'plugin:jsdoc/recommended-typescript-error': void;
  'plugin:jsdoc/recommended-typescript-flavor': void;
  'plugin:jsdoc/recommended-typescript-flavor-error': void;
  'plugin:jsdoc/flat/recommended': void;
  'plugin:jsdoc/flat/recommended-error': void;
  'plugin:jsdoc/flat/recommended-typescript': void;
  'plugin:jsdoc/flat/recommended-typescript-error': void;
  'plugin:jsdoc/flat/recommended-typescript-flavor': void;
  'plugin:jsdoc/flat/recommended-typescript-flavor-error': void;
}

export interface Plugins {
  jsdoc: void;
}

export interface RuleOptions {
  /**
   * Checks that `@access` tags have a valid value.
   *
   * @see [check-access](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header)
   */
  'jsdoc/check-access': CheckAccessRuleOptions;
  /**
   * Reports invalid alignment of JSDoc block asterisks.
   *
   * @see [check-alignment](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header)
   */
  'jsdoc/check-alignment': CheckAlignmentRuleOptions;
  /**
   * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
   *
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md#repos-sticky-header)
   */
  'jsdoc/check-examples': CheckExamplesRuleOptions;
  /**
   * Reports invalid padding inside JSDoc blocks.
   *
   * @see [check-indentation](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md#repos-sticky-header)
   */
  'jsdoc/check-indentation': CheckIndentationRuleOptions;
  /**
   * Reports invalid alignment of JSDoc block lines.
   *
   * @see [check-line-alignment](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md#repos-sticky-header)
   */
  'jsdoc/check-line-alignment': CheckLineAlignmentRuleOptions;
  /**
   * Ensures that parameter names in JSDoc match those in the function declaration.
   *
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md#repos-sticky-header)
   */
  'jsdoc/check-param-names': CheckParamNamesRuleOptions;
  /**
   * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
   *
   * @see [check-property-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md#repos-sticky-header)
   */
  'jsdoc/check-property-names': CheckPropertyNamesRuleOptions;
  /**
   * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
   *
   * @see [check-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header)
   */
  'jsdoc/check-syntax': CheckSyntaxRuleOptions;
  /**
   * Reports invalid block tag names.
   *
   * @see [check-tag-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md#repos-sticky-header)
   */
  'jsdoc/check-tag-names': CheckTagNamesRuleOptions;
  /**
   * Reports invalid types.
   *
   * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header)
   */
  'jsdoc/check-types': CheckTypesRuleOptions;
  /**
   * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
   *
   * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md#repos-sticky-header)
   */
  'jsdoc/check-values': CheckValuesRuleOptions;
  /**
   * Expects specific tags to be empty of any content.
   *
   * @see [empty-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header)
   */
  'jsdoc/empty-tags': EmptyTagsRuleOptions;
  /**
   * Reports an issue with any non-constructor function using `@implements`.
   *
   * @see [implements-on-classes](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header)
   */
  'jsdoc/implements-on-classes': ImplementsOnClassesRuleOptions;
  /**
   * Reports if JSDoc `import()` statements point to a package which is not listed in `dependencies` or `devDependencies`
   *
   * @see [imports-as-dependencies](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md#repos-sticky-header)
   */
  'jsdoc/imports-as-dependencies': ImportsAsDependenciesRuleOptions;
  /**
   * This rule reports doc comments that only restate their attached name.
   *
   * @see [informative-docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md#repos-sticky-header)
   */
  'jsdoc/informative-docs': InformativeDocsRuleOptions;
  /**
   * Enforces a regular expression pattern on descriptions.
   *
   * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header)
   */
  'jsdoc/match-description': MatchDescriptionRuleOptions;
  /**
   * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
   *
   * @see [match-name](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md#repos-sticky-header)
   */
  'jsdoc/match-name': MatchNameRuleOptions;
  /**
   * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
   *
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header)
   */
  'jsdoc/multiline-blocks': MultilineBlocksRuleOptions;
  /**
   * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
   *
   * @see [no-bad-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header)
   */
  'jsdoc/no-bad-blocks': NoBadBlocksRuleOptions;
  /**
   * Detects and removes extra lines of a blank block description
   *
   * @see [no-blank-block-descriptions](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header)
   */
  'jsdoc/no-blank-block-descriptions': NoBlankBlockDescriptionsRuleOptions;
  /**
   * Removes empty blocks with nothing but possibly line breaks
   *
   * @see [no-blank-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md#repos-sticky-header)
   */
  'jsdoc/no-blank-blocks': NoBlankBlocksRuleOptions;
  /**
   * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
   *
   * @see [no-defaults](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header)
   */
  'jsdoc/no-defaults': NoDefaultsRuleOptions;
  /**
   * Reports when certain comment structures are always expected.
   *
   * @see [no-missing-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md#repos-sticky-header)
   */
  'jsdoc/no-missing-syntax': NoMissingSyntaxRuleOptions;
  /**
   *
   *
   * @see [no-multi-asterisks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header)
   */
  'jsdoc/no-multi-asterisks': NoMultiAsterisksRuleOptions;
  /**
   * Reports when certain comment structures are present.
   *
   * @see [no-restricted-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md#repos-sticky-header)
   */
  'jsdoc/no-restricted-syntax': NoRestrictedSyntaxRuleOptions;
  /**
   * This rule reports types being used on `@param` or `@returns`.
   *
   * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header)
   */
  'jsdoc/no-types': NoTypesRuleOptions;
  /**
   * Checks that types in jsdoc comments are defined.
   *
   * @see [no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header)
   */
  'jsdoc/no-undefined-types': NoUndefinedTypesRuleOptions;
  /**
   * Requires that each JSDoc line starts with an `*`.
   *
   * @see [require-asterisk-prefix](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header)
   */
  'jsdoc/require-asterisk-prefix': RequireAsteriskPrefixRuleOptions;
  /**
   * Requires that all functions have a description.
   *
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#repos-sticky-header)
   */
  'jsdoc/require-description': RequireDescriptionRuleOptions;
  /**
   * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
   *
   * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md#repos-sticky-header)
   */
  'jsdoc/require-description-complete-sentence': RequireDescriptionCompleteSentenceRuleOptions;
  /**
   * Requires that all functions have examples.
   *
   * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header)
   */
  'jsdoc/require-example': RequireExampleRuleOptions;
  /**
   * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
   *
   * @see [require-file-overview](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header)
   */
  'jsdoc/require-file-overview': RequireFileOverviewRuleOptions;
  /**
   * Requires a hyphen before the `@param` description.
   *
   * @see [require-hyphen-before-param-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header)
   */
  'jsdoc/require-hyphen-before-param-description': RequireHyphenBeforeParamDescriptionRuleOptions;
  /**
   * Require JSDoc comments
   *
   * @see [require-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md#repos-sticky-header)
   */
  'jsdoc/require-jsdoc': RequireJsdocRuleOptions;
  /**
   * Requires that all function parameters are documented.
   *
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md#repos-sticky-header)
   */
  'jsdoc/require-param': RequireParamRuleOptions;
  /**
   * Requires that each `@param` tag has a `description` value.
   *
   * @see [require-param-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#repos-sticky-header)
   */
  'jsdoc/require-param-description': RequireParamDescriptionRuleOptions;
  /**
   * Requires that all function parameters have names.
   *
   * @see [require-param-name](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md#repos-sticky-header)
   */
  'jsdoc/require-param-name': RequireParamNameRuleOptions;
  /**
   * Requires that each `@param` tag has a `type` value.
   *
   * @see [require-param-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header)
   */
  'jsdoc/require-param-type': RequireParamTypeRuleOptions;
  /**
   * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
   *
   * @see [require-property](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header)
   */
  'jsdoc/require-property': RequirePropertyRuleOptions;
  /**
   * Requires that each `@property` tag has a `description` value.
   *
   * @see [require-property-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header)
   */
  'jsdoc/require-property-description': RequirePropertyDescriptionRuleOptions;
  /**
   * Requires that all function `@property` tags have names.
   *
   * @see [require-property-name](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-name.md#repos-sticky-header)
   */
  'jsdoc/require-property-name': RequirePropertyNameRuleOptions;
  /**
   * Requires that each `@property` tag has a `type` value.
   *
   * @see [require-property-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header)
   */
  'jsdoc/require-property-type': RequirePropertyTypeRuleOptions;
  /**
   * Requires that returns are documented.
   *
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md#repos-sticky-header)
   */
  'jsdoc/require-returns': RequireReturnsRuleOptions;
  /**
   * Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
   *
   * @see [require-returns-check](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md#repos-sticky-header)
   */
  'jsdoc/require-returns-check': RequireReturnsCheckRuleOptions;
  /**
   * Requires that the `@returns` tag has a `description` value.
   *
   * @see [require-returns-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header)
   */
  'jsdoc/require-returns-description': RequireReturnsDescriptionRuleOptions;
  /**
   * Requires that `@returns` tag has `type` value.
   *
   * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md#repos-sticky-header)
   */
  'jsdoc/require-returns-type': RequireReturnsTypeRuleOptions;
  /**
   * Requires that throw statements are documented.
   *
   * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md#repos-sticky-header)
   */
  'jsdoc/require-throws': RequireThrowsRuleOptions;
  /**
   * Requires yields are documented.
   *
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md#repos-sticky-header)
   */
  'jsdoc/require-yields': RequireYieldsRuleOptions;
  /**
   * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
   *
   * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header)
   */
  'jsdoc/require-yields-check': RequireYieldsCheckRuleOptions;
  /**
   * Sorts tags by a specified sequence according to tag name.
   *
   * @see [sort-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md#repos-sticky-header)
   */
  'jsdoc/sort-tags': SortTagsRuleOptions;
  /**
   * Enforces lines (or no lines) between tags.
   *
   * @see [tag-lines](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header)
   */
  'jsdoc/tag-lines': TagLinesRuleOptions;
  /**
   *
   *
   * @see [text-escaping](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md#repos-sticky-header)
   */
  'jsdoc/text-escaping': TextEscapingRuleOptions;
  /**
   * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
   *
   * @see [valid-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header)
   */
  'jsdoc/valid-types': ValidTypesRuleOptions;
}
