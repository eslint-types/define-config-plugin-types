import type { DebugClassComponentRuleOptions } from './rules/debug/class-component';
import type { DebugFunctionComponentRuleOptions } from './rules/debug/function-component';
import type { DebugReactHooksRuleOptions } from './rules/debug/react-hooks';
import type { JsxNoArrayIndexKeyRuleOptions } from './rules/jsx/no-array-index-key';
import type { JsxNoCommentTextnodesRuleOptions } from './rules/jsx/no-comment-textnodes';
import type { JsxNoComplicatedConditionalRenderingRuleOptions } from './rules/jsx/no-complicated-conditional-rendering';
import type { JsxNoDuplicateKeyRuleOptions } from './rules/jsx/no-duplicate-key';
import type { JsxNoLeakedConditionalRenderingRuleOptions } from './rules/jsx/no-leaked-conditional-rendering';
import type { JsxNoMissingKeyRuleOptions } from './rules/jsx/no-missing-key';
import type { JsxNoSpreadingKeyRuleOptions } from './rules/jsx/no-spreading-key';
import type { JsxNoUselessFragmentRuleOptions } from './rules/jsx/no-useless-fragment';
import type { JsxPreferShorthandBooleanRuleOptions } from './rules/jsx/prefer-shorthand-boolean';
import type { JsxPreferShorthandFragmentRuleOptions } from './rules/jsx/prefer-shorthand-fragment';
import type { NamingConventionComponentNameRuleOptions } from './rules/naming-convention/component-name';
import type { NamingConventionFilenameRuleOptions } from './rules/naming-convention/filename';
import type { NamingConventionFilenameExtensionRuleOptions } from './rules/naming-convention/filename-extension';
import type { ReactHooksEnsureCustomHooksUsingOtherHooksRuleOptions } from './rules/react-hooks/ensure-custom-hooks-using-other-hooks';
import type { ReactHooksEnsureUseCallbackHasNonEmptyDepsRuleOptions } from './rules/react-hooks/ensure-use-callback-has-non-empty-deps';
import type { ReactHooksEnsureUseMemoHasNonEmptyDepsRuleOptions } from './rules/react-hooks/ensure-use-memo-has-non-empty-deps';
import type { ReactNoChildrenCountRuleOptions } from './rules/react/no-children-count';
import type { ReactNoChildrenForEachRuleOptions } from './rules/react/no-children-for-each';
import type { ReactNoChildrenInVoidDomElementsRuleOptions } from './rules/react/no-children-in-void-dom-elements';
import type { ReactNoChildrenMapRuleOptions } from './rules/react/no-children-map';
import type { ReactNoChildrenOnlyRuleOptions } from './rules/react/no-children-only';
import type { ReactNoChildrenPropRuleOptions } from './rules/react/no-children-prop';
import type { ReactNoChildrenToArrayRuleOptions } from './rules/react/no-children-to-array';
import type { ReactNoClassComponentRuleOptions } from './rules/react/no-class-component';
import type { ReactNoCloneElementRuleOptions } from './rules/react/no-clone-element';
import type { ReactNoConstructedContextValueRuleOptions } from './rules/react/no-constructed-context-value';
import type { ReactNoCreateRefRuleOptions } from './rules/react/no-create-ref';
import type { ReactNoDangerouslySetInnerhtmlRuleOptions } from './rules/react/no-dangerously-set-innerhtml';
import type { ReactNoDangerouslySetInnerhtmlWithChildrenRuleOptions } from './rules/react/no-dangerously-set-innerhtml-with-children';
import type { ReactNoMissingButtonTypeRuleOptions } from './rules/react/no-missing-button-type';
import type { ReactNoMissingComponentDisplayNameRuleOptions } from './rules/react/no-missing-component-display-name';
import type { ReactNoMissingIframeSandboxRuleOptions } from './rules/react/no-missing-iframe-sandbox';
import type { ReactNoNamespaceRuleOptions } from './rules/react/no-namespace';
import type { ReactNoScriptUrlRuleOptions } from './rules/react/no-script-url';
import type { ReactNoStringRefsRuleOptions } from './rules/react/no-string-refs';
import type { ReactNoUnsafeIframeSandboxRuleOptions } from './rules/react/no-unsafe-iframe-sandbox';
import type { ReactNoUnsafeTargetBlankRuleOptions } from './rules/react/no-unsafe-target-blank';
import type { ReactNoUnstableDefaultPropsRuleOptions } from './rules/react/no-unstable-default-props';
import type { ReactNoUnstableNestedComponentsRuleOptions } from './rules/react/no-unstable-nested-components';
import type { ReactPreferDestructuringAssignmentRuleOptions } from './rules/react/prefer-destructuring-assignment';

export interface Extends {
  'plugin:@eslint-react/all-legacy': void;
  'plugin:@eslint-react/debug-legacy': void;
  'plugin:@eslint-react/off-legacy': void;
  'plugin:@eslint-react/recommended-legacy': void;
  'plugin:@eslint-react/recommended-type-checked-legacy': void;
  'plugin:@eslint-react/all': void;
  'plugin:@eslint-react/debug': void;
  'plugin:@eslint-react/off': void;
  'plugin:@eslint-react/recommended': void;
  'plugin:@eslint-react/recommended-type-checked': void;
}

export interface Plugins {
  '@eslint-react': void;
}

export interface RuleOptions {
  /**
   * disallow using Array index as key
   *
   * @see [jsx/no-array-index-key](https://eslint-react.xyz/rules/jsx-no-array-index-key)
   */
  '@eslint-react/jsx/no-array-index-key': JsxNoArrayIndexKeyRuleOptions;
  /**
   * disallow comments from being inserted as text nodes
   *
   * @see [jsx/no-comment-textnodes](https://eslint-react.xyz/rules/jsx-no-comment-textnodes)
   */
  '@eslint-react/jsx/no-comment-textnodes': JsxNoCommentTextnodesRuleOptions;
  /**
   * disallow complicated conditional rendering
   *
   * @see [jsx/no-complicated-conditional-rendering](https://eslint-react.xyz/rules/jsx-no-complicated-conditional-rendering)
   */
  '@eslint-react/jsx/no-complicated-conditional-rendering': JsxNoComplicatedConditionalRenderingRuleOptions;
  /**
   * disallow duplicate keys in `key` prop when rendering list
   *
   * @see [jsx/no-duplicate-key](https://eslint-react.xyz/rules/jsx-no-duplicate-key)
   */
  '@eslint-react/jsx/no-duplicate-key': JsxNoDuplicateKeyRuleOptions;
  /**
   * disallow problematic leaked values from being rendered
   *
   * @see [jsx/no-leaked-conditional-rendering](https://eslint-react.xyz/rules/jsx-no-leaked-conditional-rendering)
   */
  '@eslint-react/jsx/no-leaked-conditional-rendering': JsxNoLeakedConditionalRenderingRuleOptions;
  /**
   * require `key` prop when rendering list
   *
   * @see [jsx/no-missing-key](https://eslint-react.xyz/rules/jsx-no-missing-key)
   */
  '@eslint-react/jsx/no-missing-key': JsxNoMissingKeyRuleOptions;
  /**
   * disallow spreading `key` from objects.
   *
   * @see [jsx/no-spreading-key](https://eslint-react.xyz/rules/jsx-no-spreading-key)
   */
  '@eslint-react/jsx/no-spreading-key': JsxNoSpreadingKeyRuleOptions;
  /**
   * disallow unnecessary fragments
   *
   * @see [jsx/no-useless-fragment](https://eslint-react.xyz/rules/jsx-no-useless-fragment)
   */
  '@eslint-react/jsx/no-useless-fragment': JsxNoUselessFragmentRuleOptions;
  /**
   * enforce `boolean` attributes notation in JSX
   *
   * @see [jsx/prefer-shorthand-boolean](https://eslint-react.xyz/rules/jsx-prefer-shorthand-boolean)
   */
  '@eslint-react/jsx/prefer-shorthand-boolean': JsxPreferShorthandBooleanRuleOptions;
  /**
   * enforce using fragment syntax instead of `Fragment` component
   *
   * @see [jsx/prefer-shorthand-fragment](https://eslint-react.xyz/rules/jsx-prefer-shorthand-fragment)
   */
  '@eslint-react/jsx/prefer-shorthand-fragment': JsxPreferShorthandFragmentRuleOptions;
  /**
   * disallow `Children.count`
   *
   * @see [react/no-children-count](https://eslint-react.xyz/rules/react-no-children-count)
   */
  '@eslint-react/react/no-children-count': ReactNoChildrenCountRuleOptions;
  /**
   * disallow `Children.forEach`
   *
   * @see [react/no-children-for-each](https://eslint-react.xyz/rules/react-no-children-for-each)
   */
  '@eslint-react/react/no-children-for-each': ReactNoChildrenForEachRuleOptions;
  /**
   * disallow passing `children` to void DOM elements
   *
   * @see [react/no-children-in-void-dom-elements](https://eslint-react.xyz/rules/react-no-children-in-void-dom-elements)
   */
  '@eslint-react/react/no-children-in-void-dom-elements': ReactNoChildrenInVoidDomElementsRuleOptions;
  /**
   * disallow `Children.map`
   *
   * @see [react/no-children-map](https://eslint-react.xyz/rules/react-no-children-map)
   */
  '@eslint-react/react/no-children-map': ReactNoChildrenMapRuleOptions;
  /**
   * disallow `Children.only()`
   *
   * @see [react/no-children-only](https://eslint-react.xyz/rules/react-no-children-only)
   */
  '@eslint-react/react/no-children-only': ReactNoChildrenOnlyRuleOptions;
  /**
   * disallow passing of `children` as props
   *
   * @see [react/no-children-prop](https://eslint-react.xyz/rules/react-no-children-prop)
   */
  '@eslint-react/react/no-children-prop': ReactNoChildrenPropRuleOptions;
  /**
   * disallow `Children.toArray()`
   *
   * @see [react/no-children-to-array](https://eslint-react.xyz/rules/react-no-children-to-array)
   */
  '@eslint-react/react/no-children-to-array': ReactNoChildrenToArrayRuleOptions;
  /**
   * disallow `class component`
   *
   * @see [react/no-class-component](https://eslint-react.xyz/rules/react-no-class-component)
   */
  '@eslint-react/react/no-class-component': ReactNoClassComponentRuleOptions;
  /**
   * disallow `cloneElement`
   *
   * @see [react/no-clone-element](https://eslint-react.xyz/rules/react-no-clone-element)
   */
  '@eslint-react/react/no-clone-element': ReactNoCloneElementRuleOptions;
  /**
   * disallow passing constructed values to context providers
   *
   * @see [react/no-constructed-context-value](https://eslint-react.xyz/rules/react-no-constructed-context-value)
   */
  '@eslint-react/react/no-constructed-context-value': ReactNoConstructedContextValueRuleOptions;
  /**
   * disallow `createRef` in function components
   *
   * @see [react/no-create-ref](https://eslint-react.xyz/rules/react-no-create-ref)
   */
  '@eslint-react/react/no-create-ref': ReactNoCreateRefRuleOptions;
  /**
   * disallow when a DOM element is using `dangerouslySetInnerHTML`
   *
   * @see [react/no-dangerously-set-innerhtml](https://eslint-react.xyz/rules/react-no-dangerously-set-innerhtml)
   */
  '@eslint-react/react/no-dangerously-set-innerhtml': ReactNoDangerouslySetInnerhtmlRuleOptions;
  /**
   * disallow when a DOM element is using both `children` and `dangerouslySetInnerHTML`
   *
   * @see [react/no-dangerously-set-innerhtml-with-children](https://eslint-react.xyz/rules/react-no-dangerously-set-innerhtml-with-children)
   */
  '@eslint-react/react/no-dangerously-set-innerhtml-with-children': ReactNoDangerouslySetInnerhtmlWithChildrenRuleOptions;
  /**
   * enforce that `button` elements have an explicit `type` attribute
   *
   * @see [react/no-missing-button-type](https://eslint-react.xyz/rules/react-no-missing-button-type)
   */
  '@eslint-react/react/no-missing-button-type': ReactNoMissingButtonTypeRuleOptions;
  /**
   * require `displayName` for memo and forwardRef components
   *
   * @see [react/no-missing-component-display-name](https://eslint-react.xyz/rules/react-no-missing-component-display-name)
   */
  '@eslint-react/react/no-missing-component-display-name': ReactNoMissingComponentDisplayNameRuleOptions;
  /**
   * enforce that `iframe` elements explicitly specify a `sandbox` attribute
   *
   * @see [react/no-missing-iframe-sandbox](https://eslint-react.xyz/rules/react-no-missing-iframe-sandbox)
   */
  '@eslint-react/react/no-missing-iframe-sandbox': ReactNoMissingIframeSandboxRuleOptions;
  /**
   * enforce that namespaces are not used in React elements
   *
   * @see [react/no-namespace](https://eslint-react.xyz/rules/react-no-namespace)
   */
  '@eslint-react/react/no-namespace': ReactNoNamespaceRuleOptions;
  /**
   * disallow `javascript:` URLs as JSX event handler prop's value
   *
   * @see [react/no-script-url](https://eslint-react.xyz/rules/react-no-script-url)
   */
  '@eslint-react/react/no-script-url': ReactNoScriptUrlRuleOptions;
  /**
   * disallow using deprecated string refs
   *
   * @see [react/no-string-refs](https://eslint-react.xyz/rules/react-no-string-refs)
   */
  '@eslint-react/react/no-string-refs': ReactNoStringRefsRuleOptions;
  /**
   * disallow unsafe `iframe` `sandbox` attribute combinations
   *
   * @see [react/no-unsafe-iframe-sandbox](https://eslint-react.xyz/rules/react-no-unsafe-iframe-sandbox)
   */
  '@eslint-react/react/no-unsafe-iframe-sandbox': ReactNoUnsafeIframeSandboxRuleOptions;
  /**
   * disallow `target="_blank"` without `rel="noreferrer noopener"`
   *
   * @see [react/no-unsafe-target-blank](https://eslint-react.xyz/rules/react-no-unsafe-target-blank)
   */
  '@eslint-react/react/no-unsafe-target-blank': ReactNoUnsafeTargetBlankRuleOptions;
  /**
   * disallow usage of unstable value as default param in function component
   *
   * @see [react/no-unstable-default-props](https://eslint-react.xyz/rules/react-no-unstable-default-props)
   */
  '@eslint-react/react/no-unstable-default-props': ReactNoUnstableDefaultPropsRuleOptions;
  /**
   * disallow usage of unstable nested components
   *
   * @see [react/no-unstable-nested-components](https://eslint-react.xyz/rules/react-no-unstable-nested-components)
   */
  '@eslint-react/react/no-unstable-nested-components': ReactNoUnstableNestedComponentsRuleOptions;
  /**
   * enforce using destructuring assignment in component props and context
   *
   * @see [react/prefer-destructuring-assignment](https://eslint-react.xyz/rules/react-prefer-destructuring-assignment)
   */
  '@eslint-react/react/prefer-destructuring-assignment': ReactPreferDestructuringAssignmentRuleOptions;
  /**
   * enforce custom hooks using other hooks
   *
   * @see [react-hooks/ensure-custom-hooks-using-other-hooks](https://eslint-react.xyz/rules/react-hooks-ensure-custom-hooks-using-other-hooks)
   */
  '@eslint-react/react-hooks/ensure-custom-hooks-using-other-hooks': ReactHooksEnsureCustomHooksUsingOtherHooksRuleOptions;
  /**
   * enforce `useCallback` has non-empty dependencies array
   *
   * @see [react-hooks/ensure-use-callback-has-non-empty-deps](https://eslint-react.xyz/rules/react-hooks-ensure-use-callback-has-non-empty-deps)
   */
  '@eslint-react/react-hooks/ensure-use-callback-has-non-empty-deps': ReactHooksEnsureUseCallbackHasNonEmptyDepsRuleOptions;
  /**
   * enforce `useMemo` has non-empty dependencies array
   *
   * @see [react-hooks/ensure-use-memo-has-non-empty-deps](https://eslint-react.xyz/rules/react-hooks-ensure-use-memo-has-non-empty-deps)
   */
  '@eslint-react/react-hooks/ensure-use-memo-has-non-empty-deps': ReactHooksEnsureUseMemoHasNonEmptyDepsRuleOptions;
  /**
   * enforce component naming convention to `PascalCase` or `CONSTANT_CASE`
   *
   * @see [naming-convention/component-name](https://eslint-react.xyz/rules/naming-convention-component-name)
   */
  '@eslint-react/naming-convention/component-name': NamingConventionComponentNameRuleOptions;
  /**
   * enforce naming convention for JSX file names
   *
   * @see [naming-convention/filename](https://eslint-react.xyz/rules/naming-convention-filename)
   */
  '@eslint-react/naming-convention/filename': NamingConventionFilenameRuleOptions;
  /**
   * enforce naming convention for JSX file extensions
   *
   * @see [naming-convention/filename-extension](https://eslint-react.xyz/rules/naming-convention-filename-extension)
   */
  '@eslint-react/naming-convention/filename-extension': NamingConventionFilenameExtensionRuleOptions;
  /**
   * report all class components, including anonymous ones
   *
   * @see [debug/class-component](https://eslint-react.xyz/rules/debug-class-component)
   */
  '@eslint-react/debug/class-component': DebugClassComponentRuleOptions;
  /**
   * report all function components, including anonymous ones
   *
   * @see [debug/function-component](https://eslint-react.xyz/rules/debug-function-component)
   */
  '@eslint-react/debug/function-component': DebugFunctionComponentRuleOptions;
  /**
   * report all react hooks
   *
   * @see [debug/react-hooks](https://eslint-react.xyz/rules/debug-react-hooks)
   */
  '@eslint-react/debug/react-hooks': DebugReactHooksRuleOptions;
}
