import type { BetterRegexRuleOptions } from './rules/better-regex';
import type { CatchErrorNameRuleOptions } from './rules/catch-error-name';
import type { ConsistentDestructuringRuleOptions } from './rules/consistent-destructuring';
import type { ConsistentFunctionScopingRuleOptions } from './rules/consistent-function-scoping';
import type { CustomErrorDefinitionRuleOptions } from './rules/custom-error-definition';
import type { EmptyBraceSpacesRuleOptions } from './rules/empty-brace-spaces';
import type { ErrorMessageRuleOptions } from './rules/error-message';
import type { EscapeCaseRuleOptions } from './rules/escape-case';
import type { ExpiringTodoCommentsRuleOptions } from './rules/expiring-todo-comments';
import type { ExplicitLengthCheckRuleOptions } from './rules/explicit-length-check';
import type { FilenameCaseRuleOptions } from './rules/filename-case';
import type { ImportIndexRuleOptions } from './rules/import-index';
import type { ImportStyleRuleOptions } from './rules/import-style';
import type { NewForBuiltinsRuleOptions } from './rules/new-for-builtins';
import type { NoAbusiveEslintDisableRuleOptions } from './rules/no-abusive-eslint-disable';
import type { NoArrayCallbackReferenceRuleOptions } from './rules/no-array-callback-reference';
import type { NoArrayForEachRuleOptions } from './rules/no-array-for-each';
import type { NoArrayInstanceofRuleOptions } from './rules/no-array-instanceof';
import type { NoArrayMethodThisArgumentRuleOptions } from './rules/no-array-method-this-argument';
import type { NoArrayPushPushRuleOptions } from './rules/no-array-push-push';
import type { NoArrayReduceRuleOptions } from './rules/no-array-reduce';
import type { NoAwaitExpressionMemberRuleOptions } from './rules/no-await-expression-member';
import type { NoConsoleSpacesRuleOptions } from './rules/no-console-spaces';
import type { NoDocumentCookieRuleOptions } from './rules/no-document-cookie';
import type { NoEmptyFileRuleOptions } from './rules/no-empty-file';
import type { NoFnReferenceInIteratorRuleOptions } from './rules/no-fn-reference-in-iterator';
import type { NoForLoopRuleOptions } from './rules/no-for-loop';
import type { NoHexEscapeRuleOptions } from './rules/no-hex-escape';
import type { NoInstanceofArrayRuleOptions } from './rules/no-instanceof-array';
import type { NoInvalidRemoveEventListenerRuleOptions } from './rules/no-invalid-remove-event-listener';
import type { NoKeywordPrefixRuleOptions } from './rules/no-keyword-prefix';
import type { NoLonelyIfRuleOptions } from './rules/no-lonely-if';
import type { NoNegatedConditionRuleOptions } from './rules/no-negated-condition';
import type { NoNestedTernaryRuleOptions } from './rules/no-nested-ternary';
import type { NoNewArrayRuleOptions } from './rules/no-new-array';
import type { NoNewBufferRuleOptions } from './rules/no-new-buffer';
import type { NoNullRuleOptions } from './rules/no-null';
import type { NoObjectAsDefaultParameterRuleOptions } from './rules/no-object-as-default-parameter';
import type { NoProcessExitRuleOptions } from './rules/no-process-exit';
import type { NoReduceRuleOptions } from './rules/no-reduce';
import type { NoStaticOnlyClassRuleOptions } from './rules/no-static-only-class';
import type { NoThenableRuleOptions } from './rules/no-thenable';
import type { NoThisAssignmentRuleOptions } from './rules/no-this-assignment';
import type { NoTypeofUndefinedRuleOptions } from './rules/no-typeof-undefined';
import type { NoUnnecessaryAwaitRuleOptions } from './rules/no-unnecessary-await';
import type { NoUnreadableArrayDestructuringRuleOptions } from './rules/no-unreadable-array-destructuring';
import type { NoUnreadableIifeRuleOptions } from './rules/no-unreadable-iife';
import type { NoUnsafeRegexRuleOptions } from './rules/no-unsafe-regex';
import type { NoUnusedPropertiesRuleOptions } from './rules/no-unused-properties';
import type { NoUselessFallbackInSpreadRuleOptions } from './rules/no-useless-fallback-in-spread';
import type { NoUselessLengthCheckRuleOptions } from './rules/no-useless-length-check';
import type { NoUselessPromiseResolveRejectRuleOptions } from './rules/no-useless-promise-resolve-reject';
import type { NoUselessSpreadRuleOptions } from './rules/no-useless-spread';
import type { NoUselessSwitchCaseRuleOptions } from './rules/no-useless-switch-case';
import type { NoUselessUndefinedRuleOptions } from './rules/no-useless-undefined';
import type { NoZeroFractionsRuleOptions } from './rules/no-zero-fractions';
import type { NumberLiteralCaseRuleOptions } from './rules/number-literal-case';
import type { NumericSeparatorsStyleRuleOptions } from './rules/numeric-separators-style';
import type { PreferAddEventListenerRuleOptions } from './rules/prefer-add-event-listener';
import type { PreferArrayFindRuleOptions } from './rules/prefer-array-find';
import type { PreferArrayFlatRuleOptions } from './rules/prefer-array-flat';
import type { PreferArrayFlatMapRuleOptions } from './rules/prefer-array-flat-map';
import type { PreferArrayIndexOfRuleOptions } from './rules/prefer-array-index-of';
import type { PreferArraySomeRuleOptions } from './rules/prefer-array-some';
import type { PreferAtRuleOptions } from './rules/prefer-at';
import type { PreferBlobReadingMethodsRuleOptions } from './rules/prefer-blob-reading-methods';
import type { PreferCodePointRuleOptions } from './rules/prefer-code-point';
import type { PreferDatasetRuleOptions } from './rules/prefer-dataset';
import type { PreferDateNowRuleOptions } from './rules/prefer-date-now';
import type { PreferDefaultParametersRuleOptions } from './rules/prefer-default-parameters';
import type { PreferDomNodeAppendRuleOptions } from './rules/prefer-dom-node-append';
import type { PreferDomNodeDatasetRuleOptions } from './rules/prefer-dom-node-dataset';
import type { PreferDomNodeRemoveRuleOptions } from './rules/prefer-dom-node-remove';
import type { PreferDomNodeTextContentRuleOptions } from './rules/prefer-dom-node-text-content';
import type { PreferEventKeyRuleOptions } from './rules/prefer-event-key';
import type { PreferEventTargetRuleOptions } from './rules/prefer-event-target';
import type { PreferExponentiationOperatorRuleOptions } from './rules/prefer-exponentiation-operator';
import type { PreferExportFromRuleOptions } from './rules/prefer-export-from';
import type { PreferFlatMapRuleOptions } from './rules/prefer-flat-map';
import type { PreferIncludesRuleOptions } from './rules/prefer-includes';
import type { PreferJsonParseBufferRuleOptions } from './rules/prefer-json-parse-buffer';
import type { PreferKeyboardEventKeyRuleOptions } from './rules/prefer-keyboard-event-key';
import type { PreferLogicalOperatorOverTernaryRuleOptions } from './rules/prefer-logical-operator-over-ternary';
import type { PreferMathTruncRuleOptions } from './rules/prefer-math-trunc';
import type { PreferModernDomApisRuleOptions } from './rules/prefer-modern-dom-apis';
import type { PreferModernMathApisRuleOptions } from './rules/prefer-modern-math-apis';
import type { PreferModuleRuleOptions } from './rules/prefer-module';
import type { PreferNativeCoercionFunctionsRuleOptions } from './rules/prefer-native-coercion-functions';
import type { PreferNegativeIndexRuleOptions } from './rules/prefer-negative-index';
import type { PreferNodeAppendRuleOptions } from './rules/prefer-node-append';
import type { PreferNodeProtocolRuleOptions } from './rules/prefer-node-protocol';
import type { PreferNodeRemoveRuleOptions } from './rules/prefer-node-remove';
import type { PreferNumberPropertiesRuleOptions } from './rules/prefer-number-properties';
import type { PreferObjectFromEntriesRuleOptions } from './rules/prefer-object-from-entries';
import type { PreferObjectHasOwnRuleOptions } from './rules/prefer-object-has-own';
import type { PreferOptionalCatchBindingRuleOptions } from './rules/prefer-optional-catch-binding';
import type { PreferPrototypeMethodsRuleOptions } from './rules/prefer-prototype-methods';
import type { PreferQuerySelectorRuleOptions } from './rules/prefer-query-selector';
import type { PreferReflectApplyRuleOptions } from './rules/prefer-reflect-apply';
import type { PreferRegexpTestRuleOptions } from './rules/prefer-regexp-test';
import type { PreferReplaceAllRuleOptions } from './rules/prefer-replace-all';
import type { PreferSetHasRuleOptions } from './rules/prefer-set-has';
import type { PreferSetSizeRuleOptions } from './rules/prefer-set-size';
import type { PreferSpreadRuleOptions } from './rules/prefer-spread';
import type { PreferStartsEndsWithRuleOptions } from './rules/prefer-starts-ends-with';
import type { PreferStringReplaceAllRuleOptions } from './rules/prefer-string-replace-all';
import type { PreferStringSliceRuleOptions } from './rules/prefer-string-slice';
import type { PreferStringStartsEndsWithRuleOptions } from './rules/prefer-string-starts-ends-with';
import type { PreferStringTrimStartEndRuleOptions } from './rules/prefer-string-trim-start-end';
import type { PreferSwitchRuleOptions } from './rules/prefer-switch';
import type { PreferTernaryRuleOptions } from './rules/prefer-ternary';
import type { PreferTextContentRuleOptions } from './rules/prefer-text-content';
import type { PreferTopLevelAwaitRuleOptions } from './rules/prefer-top-level-await';
import type { PreferTrimStartEndRuleOptions } from './rules/prefer-trim-start-end';
import type { PreferTypeErrorRuleOptions } from './rules/prefer-type-error';
import type { PreventAbbreviationsRuleOptions } from './rules/prevent-abbreviations';
import type { RegexShorthandRuleOptions } from './rules/regex-shorthand';
import type { RelativeUrlStyleRuleOptions } from './rules/relative-url-style';
import type { RequireArrayJoinSeparatorRuleOptions } from './rules/require-array-join-separator';
import type { RequireNumberToFixedDigitsArgumentRuleOptions } from './rules/require-number-to-fixed-digits-argument';
import type { RequirePostMessageTargetOriginRuleOptions } from './rules/require-post-message-target-origin';
import type { StringContentRuleOptions } from './rules/string-content';
import type { SwitchCaseBracesRuleOptions } from './rules/switch-case-braces';
import type { TemplateIndentRuleOptions } from './rules/template-indent';
import type { TextEncodingIdentifierCaseRuleOptions } from './rules/text-encoding-identifier-case';
import type { ThrowNewErrorRuleOptions } from './rules/throw-new-error';

export interface Extends {
  'plugin:unicorn/recommended': void;
  'plugin:unicorn/all': void;
}

export interface Plugins {
  unicorn: void;
}

export interface RuleOptions {
  /**
   * Improve regexes by making them shorter, consistent, and safer.
   *
   * @see [better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/better-regex.md)
   */
  'unicorn/better-regex': BetterRegexRuleOptions;
  /**
   * Enforce a specific parameter name in catch clauses.
   *
   * @see [catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/catch-error-name.md)
   */
  'unicorn/catch-error-name': CatchErrorNameRuleOptions;
  /**
   * Use destructured variables over properties.
   *
   * @see [consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/consistent-destructuring.md)
   */
  'unicorn/consistent-destructuring': ConsistentDestructuringRuleOptions;
  /**
   * Move function definitions to the highest possible scope.
   *
   * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/consistent-function-scoping.md)
   */
  'unicorn/consistent-function-scoping': ConsistentFunctionScopingRuleOptions;
  /**
   * Enforce correct `Error` subclassing.
   *
   * @see [custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/custom-error-definition.md)
   */
  'unicorn/custom-error-definition': CustomErrorDefinitionRuleOptions;
  /**
   * Enforce no spaces between braces.
   *
   * @see [empty-brace-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/empty-brace-spaces.md)
   */
  'unicorn/empty-brace-spaces': EmptyBraceSpacesRuleOptions;
  /**
   * Enforce passing a `message` value when creating a built-in error.
   *
   * @see [error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/error-message.md)
   */
  'unicorn/error-message': ErrorMessageRuleOptions;
  /**
   * Require escape sequences to use uppercase values.
   *
   * @see [escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/escape-case.md)
   */
  'unicorn/escape-case': EscapeCaseRuleOptions;
  /**
   * Add expiration conditions to TODO comments.
   *
   * @see [expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/expiring-todo-comments.md)
   */
  'unicorn/expiring-todo-comments': ExpiringTodoCommentsRuleOptions;
  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   *
   * @see [explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/explicit-length-check.md)
   */
  'unicorn/explicit-length-check': ExplicitLengthCheckRuleOptions;
  /**
   * Enforce a case style for filenames.
   *
   * @see [filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/filename-case.md)
   */
  'unicorn/filename-case': FilenameCaseRuleOptions;
  /**
   * Enforce specific import styles per module.
   *
   * @see [import-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/import-style.md)
   */
  'unicorn/import-style': ImportStyleRuleOptions;
  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   *
   * @see [new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/new-for-builtins.md)
   */
  'unicorn/new-for-builtins': NewForBuiltinsRuleOptions;
  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   *
   * @see [no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-abusive-eslint-disable.md)
   */
  'unicorn/no-abusive-eslint-disable': NoAbusiveEslintDisableRuleOptions;
  /**
   * Prevent passing a function reference directly to iterator methods.
   *
   * @see [no-array-callback-reference](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-array-callback-reference.md)
   */
  'unicorn/no-array-callback-reference': NoArrayCallbackReferenceRuleOptions;
  /**
   * Prefer `for…of` over the `forEach` method.
   *
   * @see [no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-array-for-each.md)
   */
  'unicorn/no-array-for-each': NoArrayForEachRuleOptions;
  /**
   * Disallow using the `this` argument in array methods.
   *
   * @see [no-array-method-this-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-array-method-this-argument.md)
   */
  'unicorn/no-array-method-this-argument': NoArrayMethodThisArgumentRuleOptions;
  /**
   * Enforce combining multiple `Array#push()` into one call.
   *
   * @see [no-array-push-push](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-array-push-push.md)
   */
  'unicorn/no-array-push-push': NoArrayPushPushRuleOptions;
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   *
   * @see [no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-array-reduce.md)
   */
  'unicorn/no-array-reduce': NoArrayReduceRuleOptions;
  /**
   * Disallow member access from await expression.
   *
   * @see [no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-await-expression-member.md)
   */
  'unicorn/no-await-expression-member': NoAwaitExpressionMemberRuleOptions;
  /**
   * Do not use leading/trailing space between `console.log` parameters.
   *
   * @see [no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-console-spaces.md)
   */
  'unicorn/no-console-spaces': NoConsoleSpacesRuleOptions;
  /**
   * Do not use `document.cookie` directly.
   *
   * @see [no-document-cookie](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-document-cookie.md)
   */
  'unicorn/no-document-cookie': NoDocumentCookieRuleOptions;
  /**
   * Disallow empty files.
   *
   * @see [no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-empty-file.md)
   */
  'unicorn/no-empty-file': NoEmptyFileRuleOptions;
  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   *
   * @see [no-for-loop](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-for-loop.md)
   */
  'unicorn/no-for-loop': NoForLoopRuleOptions;
  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   *
   * @see [no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-hex-escape.md)
   */
  'unicorn/no-hex-escape': NoHexEscapeRuleOptions;
  /**
   * Require `Array.isArray()` instead of `instanceof Array`.
   *
   * @see [no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-instanceof-array.md)
   */
  'unicorn/no-instanceof-array': NoInstanceofArrayRuleOptions;
  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   *
   * @see [no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-invalid-remove-event-listener.md)
   */
  'unicorn/no-invalid-remove-event-listener': NoInvalidRemoveEventListenerRuleOptions;
  /**
   * Disallow identifiers starting with `new` or `class`.
   *
   * @see [no-keyword-prefix](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-keyword-prefix.md)
   */
  'unicorn/no-keyword-prefix': NoKeywordPrefixRuleOptions;
  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   *
   * @see [no-lonely-if](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-lonely-if.md)
   */
  'unicorn/no-lonely-if': NoLonelyIfRuleOptions;
  /**
   * Disallow negated conditions.
   *
   * @see [no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-negated-condition.md)
   */
  'unicorn/no-negated-condition': NoNegatedConditionRuleOptions;
  /**
   * Disallow nested ternary expressions.
   *
   * @see [no-nested-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-nested-ternary.md)
   */
  'unicorn/no-nested-ternary': NoNestedTernaryRuleOptions;
  /**
   * Disallow `new Array()`.
   *
   * @see [no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-new-array.md)
   */
  'unicorn/no-new-array': NoNewArrayRuleOptions;
  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   *
   * @see [no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-new-buffer.md)
   */
  'unicorn/no-new-buffer': NoNewBufferRuleOptions;
  /**
   * Disallow the use of the `null` literal.
   *
   * @see [no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-null.md)
   */
  'unicorn/no-null': NoNullRuleOptions;
  /**
   * Disallow the use of objects as default parameters.
   *
   * @see [no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-object-as-default-parameter.md)
   */
  'unicorn/no-object-as-default-parameter': NoObjectAsDefaultParameterRuleOptions;
  /**
   * Disallow `process.exit()`.
   *
   * @see [no-process-exit](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-process-exit.md)
   */
  'unicorn/no-process-exit': NoProcessExitRuleOptions;
  /**
   * Disallow classes that only have static members.
   *
   * @see [no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-static-only-class.md)
   */
  'unicorn/no-static-only-class': NoStaticOnlyClassRuleOptions;
  /**
   * Disallow `then` property.
   *
   * @see [no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-thenable.md)
   */
  'unicorn/no-thenable': NoThenableRuleOptions;
  /**
   * Disallow assigning `this` to a variable.
   *
   * @see [no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-this-assignment.md)
   */
  'unicorn/no-this-assignment': NoThisAssignmentRuleOptions;
  /**
   * Disallow comparing `undefined` using `typeof`.
   *
   * @see [no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-typeof-undefined.md)
   */
  'unicorn/no-typeof-undefined': NoTypeofUndefinedRuleOptions;
  /**
   * Disallow awaiting non-promise values.
   *
   * @see [no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-unnecessary-await.md)
   */
  'unicorn/no-unnecessary-await': NoUnnecessaryAwaitRuleOptions;
  /**
   * Disallow unreadable array destructuring.
   *
   * @see [no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-unreadable-array-destructuring.md)
   */
  'unicorn/no-unreadable-array-destructuring': NoUnreadableArrayDestructuringRuleOptions;
  /**
   * Disallow unreadable IIFEs.
   *
   * @see [no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-unreadable-iife.md)
   */
  'unicorn/no-unreadable-iife': NoUnreadableIifeRuleOptions;
  /**
   * Disallow unused object properties.
   *
   * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-unused-properties.md)
   */
  'unicorn/no-unused-properties': NoUnusedPropertiesRuleOptions;
  /**
   * Disallow useless fallback when spreading in object literals.
   *
   * @see [no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-useless-fallback-in-spread.md)
   */
  'unicorn/no-useless-fallback-in-spread': NoUselessFallbackInSpreadRuleOptions;
  /**
   * Disallow useless array length check.
   *
   * @see [no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-useless-length-check.md)
   */
  'unicorn/no-useless-length-check': NoUselessLengthCheckRuleOptions;
  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks
   *
   * @see [no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-useless-promise-resolve-reject.md)
   */
  'unicorn/no-useless-promise-resolve-reject': NoUselessPromiseResolveRejectRuleOptions;
  /**
   * Disallow unnecessary spread.
   *
   * @see [no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-useless-spread.md)
   */
  'unicorn/no-useless-spread': NoUselessSpreadRuleOptions;
  /**
   * Disallow useless case in switch statements.
   *
   * @see [no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-useless-switch-case.md)
   */
  'unicorn/no-useless-switch-case': NoUselessSwitchCaseRuleOptions;
  /**
   * Disallow useless `undefined`.
   *
   * @see [no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-useless-undefined.md)
   */
  'unicorn/no-useless-undefined': NoUselessUndefinedRuleOptions;
  /**
   * Disallow number literals with zero fractions or dangling dots.
   *
   * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/no-zero-fractions.md)
   */
  'unicorn/no-zero-fractions': NoZeroFractionsRuleOptions;
  /**
   * Enforce proper case for numeric literals.
   *
   * @see [number-literal-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/number-literal-case.md)
   */
  'unicorn/number-literal-case': NumberLiteralCaseRuleOptions;
  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   *
   * @see [numeric-separators-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/numeric-separators-style.md)
   */
  'unicorn/numeric-separators-style': NumericSeparatorsStyleRuleOptions;
  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   *
   * @see [prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-add-event-listener.md)
   */
  'unicorn/prefer-add-event-listener': PreferAddEventListenerRuleOptions;
  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   *
   * @see [prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-array-find.md)
   */
  'unicorn/prefer-array-find': PreferArrayFindRuleOptions;
  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   *
   * @see [prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-array-flat-map.md)
   */
  'unicorn/prefer-array-flat-map': PreferArrayFlatMapRuleOptions;
  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   *
   * @see [prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-array-flat.md)
   */
  'unicorn/prefer-array-flat': PreferArrayFlatRuleOptions;
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   *
   * @see [prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-array-index-of.md)
   */
  'unicorn/prefer-array-index-of': PreferArrayIndexOfRuleOptions;
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast}(…)`.
   *
   * @see [prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-array-some.md)
   */
  'unicorn/prefer-array-some': PreferArraySomeRuleOptions;
  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   *
   * @see [prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-at.md)
   */
  'unicorn/prefer-at': PreferAtRuleOptions;
  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   *
   * @see [prefer-blob-reading-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-blob-reading-methods.md)
   */
  'unicorn/prefer-blob-reading-methods': PreferBlobReadingMethodsRuleOptions;
  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   *
   * @see [prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-code-point.md)
   */
  'unicorn/prefer-code-point': PreferCodePointRuleOptions;
  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   *
   * @see [prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-date-now.md)
   */
  'unicorn/prefer-date-now': PreferDateNowRuleOptions;
  /**
   * Prefer default parameters over reassignment.
   *
   * @see [prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-default-parameters.md)
   */
  'unicorn/prefer-default-parameters': PreferDefaultParametersRuleOptions;
  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   *
   * @see [prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-dom-node-append.md)
   */
  'unicorn/prefer-dom-node-append': PreferDomNodeAppendRuleOptions;
  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   *
   * @see [prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-dom-node-dataset.md)
   */
  'unicorn/prefer-dom-node-dataset': PreferDomNodeDatasetRuleOptions;
  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   *
   * @see [prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-dom-node-remove.md)
   */
  'unicorn/prefer-dom-node-remove': PreferDomNodeRemoveRuleOptions;
  /**
   * Prefer `.textContent` over `.innerText`.
   *
   * @see [prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-dom-node-text-content.md)
   */
  'unicorn/prefer-dom-node-text-content': PreferDomNodeTextContentRuleOptions;
  /**
   * Prefer `EventTarget` over `EventEmitter`.
   *
   * @see [prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-event-target.md)
   */
  'unicorn/prefer-event-target': PreferEventTargetRuleOptions;
  /**
   * Prefer `export…from` when re-exporting.
   *
   * @see [prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-export-from.md)
   */
  'unicorn/prefer-export-from': PreferExportFromRuleOptions;
  /**
   * Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for existence or non-existence.
   *
   * @see [prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-includes.md)
   */
  'unicorn/prefer-includes': PreferIncludesRuleOptions;
  /**
   * Prefer reading a JSON file as a buffer.
   *
   * @see [prefer-json-parse-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-json-parse-buffer.md)
   */
  'unicorn/prefer-json-parse-buffer': PreferJsonParseBufferRuleOptions;
  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   *
   * @see [prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-keyboard-event-key.md)
   */
  'unicorn/prefer-keyboard-event-key': PreferKeyboardEventKeyRuleOptions;
  /**
   * Prefer using a logical operator over a ternary.
   *
   * @see [prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-logical-operator-over-ternary.md)
   */
  'unicorn/prefer-logical-operator-over-ternary': PreferLogicalOperatorOverTernaryRuleOptions;
  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   *
   * @see [prefer-math-trunc](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-math-trunc.md)
   */
  'unicorn/prefer-math-trunc': PreferMathTruncRuleOptions;
  /**
   * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
   *
   * @see [prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-modern-dom-apis.md)
   */
  'unicorn/prefer-modern-dom-apis': PreferModernDomApisRuleOptions;
  /**
   * Prefer modern `Math` APIs over legacy patterns.
   *
   * @see [prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-modern-math-apis.md)
   */
  'unicorn/prefer-modern-math-apis': PreferModernMathApisRuleOptions;
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   *
   * @see [prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-module.md)
   */
  'unicorn/prefer-module': PreferModuleRuleOptions;
  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   *
   * @see [prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-native-coercion-functions.md)
   */
  'unicorn/prefer-native-coercion-functions': PreferNativeCoercionFunctionsRuleOptions;
  /**
   * Prefer negative index over `.length - index` when possible.
   *
   * @see [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-negative-index.md)
   */
  'unicorn/prefer-negative-index': PreferNegativeIndexRuleOptions;
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   *
   * @see [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-node-protocol.md)
   */
  'unicorn/prefer-node-protocol': PreferNodeProtocolRuleOptions;
  /**
   * Prefer `Number` static properties over global ones.
   *
   * @see [prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-number-properties.md)
   */
  'unicorn/prefer-number-properties': PreferNumberPropertiesRuleOptions;
  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   *
   * @see [prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-object-from-entries.md)
   */
  'unicorn/prefer-object-from-entries': PreferObjectFromEntriesRuleOptions;
  /**
   * Prefer omitting the `catch` binding parameter.
   *
   * @see [prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-optional-catch-binding.md)
   */
  'unicorn/prefer-optional-catch-binding': PreferOptionalCatchBindingRuleOptions;
  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   *
   * @see [prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-prototype-methods.md)
   */
  'unicorn/prefer-prototype-methods': PreferPrototypeMethodsRuleOptions;
  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()`.
   *
   * @see [prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-query-selector.md)
   */
  'unicorn/prefer-query-selector': PreferQuerySelectorRuleOptions;
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   *
   * @see [prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-reflect-apply.md)
   */
  'unicorn/prefer-reflect-apply': PreferReflectApplyRuleOptions;
  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   *
   * @see [prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-regexp-test.md)
   */
  'unicorn/prefer-regexp-test': PreferRegexpTestRuleOptions;
  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   *
   * @see [prefer-set-has](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-set-has.md)
   */
  'unicorn/prefer-set-has': PreferSetHasRuleOptions;
  /**
   * Prefer using `Set#size` instead of `Array#length`.
   *
   * @see [prefer-set-size](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-set-size.md)
   */
  'unicorn/prefer-set-size': PreferSetSizeRuleOptions;
  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.
   *
   * @see [prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-spread.md)
   */
  'unicorn/prefer-spread': PreferSpreadRuleOptions;
  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   *
   * @see [prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-string-replace-all.md)
   */
  'unicorn/prefer-string-replace-all': PreferStringReplaceAllRuleOptions;
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   *
   * @see [prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-string-slice.md)
   */
  'unicorn/prefer-string-slice': PreferStringSliceRuleOptions;
  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   *
   * @see [prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-string-starts-ends-with.md)
   */
  'unicorn/prefer-string-starts-ends-with': PreferStringStartsEndsWithRuleOptions;
  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   *
   * @see [prefer-string-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-string-trim-start-end.md)
   */
  'unicorn/prefer-string-trim-start-end': PreferStringTrimStartEndRuleOptions;
  /**
   * Prefer `switch` over multiple `else-if`.
   *
   * @see [prefer-switch](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-switch.md)
   */
  'unicorn/prefer-switch': PreferSwitchRuleOptions;
  /**
   * Prefer ternary expressions over simple `if-else` statements.
   *
   * @see [prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-ternary.md)
   */
  'unicorn/prefer-ternary': PreferTernaryRuleOptions;
  /**
   * Prefer top-level await over top-level promises and async function calls.
   *
   * @see [prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-top-level-await.md)
   */
  'unicorn/prefer-top-level-await': PreferTopLevelAwaitRuleOptions;
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   *
   * @see [prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prefer-type-error.md)
   */
  'unicorn/prefer-type-error': PreferTypeErrorRuleOptions;
  /**
   * Prevent abbreviations.
   *
   * @see [prevent-abbreviations](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/prevent-abbreviations.md)
   */
  'unicorn/prevent-abbreviations': PreventAbbreviationsRuleOptions;
  /**
   * Enforce consistent relative URL style.
   *
   * @see [relative-url-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/relative-url-style.md)
   */
  'unicorn/relative-url-style': RelativeUrlStyleRuleOptions;
  /**
   * Enforce using the separator argument with `Array#join()`.
   *
   * @see [require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/require-array-join-separator.md)
   */
  'unicorn/require-array-join-separator': RequireArrayJoinSeparatorRuleOptions;
  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   *
   * @see [require-number-to-fixed-digits-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/require-number-to-fixed-digits-argument.md)
   */
  'unicorn/require-number-to-fixed-digits-argument': RequireNumberToFixedDigitsArgumentRuleOptions;
  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   *
   * @see [require-post-message-target-origin](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/require-post-message-target-origin.md)
   */
  'unicorn/require-post-message-target-origin': RequirePostMessageTargetOriginRuleOptions;
  /**
   * Enforce better string content.
   *
   * @see [string-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/string-content.md)
   */
  'unicorn/string-content': StringContentRuleOptions;
  /**
   * Enforce consistent brace style for `case` clauses.
   *
   * @see [switch-case-braces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/switch-case-braces.md)
   */
  'unicorn/switch-case-braces': SwitchCaseBracesRuleOptions;
  /**
   * Fix whitespace-insensitive template indentation.
   *
   * @see [template-indent](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/template-indent.md)
   */
  'unicorn/template-indent': TemplateIndentRuleOptions;
  /**
   * Enforce consistent case for text encoding identifiers.
   *
   * @see [text-encoding-identifier-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/text-encoding-identifier-case.md)
   */
  'unicorn/text-encoding-identifier-case': TextEncodingIdentifierCaseRuleOptions;
  /**
   * Require `new` when throwing an error.
   *
   * @see [throw-new-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/rules/throw-new-error.md)
   */
  'unicorn/throw-new-error': ThrowNewErrorRuleOptions;
  /**
   * undefined
   *
   * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#import-index)
   */
  'unicorn/import-index': ImportIndexRuleOptions;
  /**
   * undefined
   *
   * @see [no-array-instanceof](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#no-array-instanceof)
   */
  'unicorn/no-array-instanceof': NoArrayInstanceofRuleOptions;
  /**
   * undefined
   *
   * @see [no-fn-reference-in-iterator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#no-fn-reference-in-iterator)
   */
  'unicorn/no-fn-reference-in-iterator': NoFnReferenceInIteratorRuleOptions;
  /**
   * undefined
   *
   * @see [no-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#no-reduce)
   */
  'unicorn/no-reduce': NoReduceRuleOptions;
  /**
   * undefined
   *
   * @see [no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#no-unsafe-regex)
   */
  'unicorn/no-unsafe-regex': NoUnsafeRegexRuleOptions;
  /**
   * undefined
   *
   * @see [prefer-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#prefer-dataset)
   */
  'unicorn/prefer-dataset': PreferDatasetRuleOptions;
  /**
   * undefined
   *
   * @see [prefer-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#prefer-event-key)
   */
  'unicorn/prefer-event-key': PreferEventKeyRuleOptions;
  /**
   * undefined
   *
   * @see [prefer-exponentiation-operator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#prefer-exponentiation-operator)
   */
  'unicorn/prefer-exponentiation-operator': PreferExponentiationOperatorRuleOptions;
  /**
   * undefined
   *
   * @see [prefer-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#prefer-flat-map)
   */
  'unicorn/prefer-flat-map': PreferFlatMapRuleOptions;
  /**
   * undefined
   *
   * @see [prefer-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#prefer-node-append)
   */
  'unicorn/prefer-node-append': PreferNodeAppendRuleOptions;
  /**
   * undefined
   *
   * @see [prefer-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#prefer-node-remove)
   */
  'unicorn/prefer-node-remove': PreferNodeRemoveRuleOptions;
  /**
   * undefined
   *
   * @see [prefer-object-has-own](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#prefer-object-has-own)
   */
  'unicorn/prefer-object-has-own': PreferObjectHasOwnRuleOptions;
  /**
   * undefined
   *
   * @see [prefer-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#prefer-replace-all)
   */
  'unicorn/prefer-replace-all': PreferReplaceAllRuleOptions;
  /**
   * undefined
   *
   * @see [prefer-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#prefer-starts-ends-with)
   */
  'unicorn/prefer-starts-ends-with': PreferStartsEndsWithRuleOptions;
  /**
   * undefined
   *
   * @see [prefer-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#prefer-text-content)
   */
  'unicorn/prefer-text-content': PreferTextContentRuleOptions;
  /**
   * undefined
   *
   * @see [prefer-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#prefer-trim-start-end)
   */
  'unicorn/prefer-trim-start-end': PreferTrimStartEndRuleOptions;
  /**
   * undefined
   *
   * @see [regex-shorthand](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v49.0.0/docs/deprecated-rules.md#regex-shorthand)
   */
  'unicorn/regex-shorthand': RegexShorthandRuleOptions;
}
