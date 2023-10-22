import type { ConsistentTypeSpecifierStyleRuleOptions } from './rules/consistent-type-specifier-style';
import type { DefaultRuleOptions } from './rules/default';
import type { DynamicImportChunknameRuleOptions } from './rules/dynamic-import-chunkname';
import type { ExportRuleOptions } from './rules/export';
import type { ExportsLastRuleOptions } from './rules/exports-last';
import type { ExtensionsRuleOptions } from './rules/extensions';
import type { FirstRuleOptions } from './rules/first';
import type { GroupExportsRuleOptions } from './rules/group-exports';
import type { ImportsFirstRuleOptions } from './rules/imports-first';
import type { MaxDependenciesRuleOptions } from './rules/max-dependencies';
import type { NamedRuleOptions } from './rules/named';
import type { NamespaceRuleOptions } from './rules/namespace';
import type { NewlineAfterImportRuleOptions } from './rules/newline-after-import';
import type { NoAbsolutePathRuleOptions } from './rules/no-absolute-path';
import type { NoAmdRuleOptions } from './rules/no-amd';
import type { NoAnonymousDefaultExportRuleOptions } from './rules/no-anonymous-default-export';
import type { NoCommonjsRuleOptions } from './rules/no-commonjs';
import type { NoCycleRuleOptions } from './rules/no-cycle';
import type { NoDefaultExportRuleOptions } from './rules/no-default-export';
import type { NoDeprecatedRuleOptions } from './rules/no-deprecated';
import type { NoDuplicatesRuleOptions } from './rules/no-duplicates';
import type { NoDynamicRequireRuleOptions } from './rules/no-dynamic-require';
import type { NoEmptyNamedBlocksRuleOptions } from './rules/no-empty-named-blocks';
import type { NoExtraneousDependenciesRuleOptions } from './rules/no-extraneous-dependencies';
import type { NoImportModuleExportsRuleOptions } from './rules/no-import-module-exports';
import type { NoInternalModulesRuleOptions } from './rules/no-internal-modules';
import type { NoMutableExportsRuleOptions } from './rules/no-mutable-exports';
import type { NoNamedAsDefaultRuleOptions } from './rules/no-named-as-default';
import type { NoNamedAsDefaultMemberRuleOptions } from './rules/no-named-as-default-member';
import type { NoNamedDefaultRuleOptions } from './rules/no-named-default';
import type { NoNamedExportRuleOptions } from './rules/no-named-export';
import type { NoNamespaceRuleOptions } from './rules/no-namespace';
import type { NoNodejsModulesRuleOptions } from './rules/no-nodejs-modules';
import type { NoRelativePackagesRuleOptions } from './rules/no-relative-packages';
import type { NoRelativeParentImportsRuleOptions } from './rules/no-relative-parent-imports';
import type { NoRestrictedPathsRuleOptions } from './rules/no-restricted-paths';
import type { NoSelfImportRuleOptions } from './rules/no-self-import';
import type { NoUnassignedImportRuleOptions } from './rules/no-unassigned-import';
import type { NoUnresolvedRuleOptions } from './rules/no-unresolved';
import type { NoUnusedModulesRuleOptions } from './rules/no-unused-modules';
import type { NoUselessPathSegmentsRuleOptions } from './rules/no-useless-path-segments';
import type { NoWebpackLoaderSyntaxRuleOptions } from './rules/no-webpack-loader-syntax';
import type { OrderRuleOptions } from './rules/order';
import type { PreferDefaultExportRuleOptions } from './rules/prefer-default-export';
import type { UnambiguousRuleOptions } from './rules/unambiguous';
import type { Settings } from './settings';

declare module 'eslint-define-config' {
  export interface CustomExtends {
    'plugin:import/recommended': void;
    'plugin:import/errors': void;
    'plugin:import/warnings': void;
    'plugin:import/stage-0': void;
    'plugin:import/react': void;
    'plugin:import/react-native': void;
    'plugin:import/electron': void;
    'plugin:import/typescript': void;
  }

  export interface CustomPlugins {
    import: void;
  }

  export interface CustomRuleOptions {
    /**
     * Ensure imports point to a file/module that can be resolved.
     *
     * @see [no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-unresolved.md)
     */
    'import/no-unresolved': NoUnresolvedRuleOptions;
    /**
     * Ensure named imports correspond to a named export in the remote file.
     *
     * @see [named](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/named.md)
     */
    'import/named': NamedRuleOptions;
    /**
     * Ensure a default export is present, given a default import.
     *
     * @see [default](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/default.md)
     */
    'import/default': DefaultRuleOptions;
    /**
     * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
     *
     * @see [namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/namespace.md)
     */
    'import/namespace': NamespaceRuleOptions;
    /**
     * Forbid namespace (a.k.a. "wildcard" `*`) imports.
     *
     * @see [no-namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-namespace.md)
     */
    'import/no-namespace': NoNamespaceRuleOptions;
    /**
     * Forbid any invalid exports, i.e. re-export of the same name.
     *
     * @see [export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/export.md)
     */
    'import/export': ExportRuleOptions;
    /**
     * Forbid the use of mutable exports with `var` or `let`.
     *
     * @see [no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-mutable-exports.md)
     */
    'import/no-mutable-exports': NoMutableExportsRuleOptions;
    /**
     * Ensure consistent use of file extension within the import path.
     *
     * @see [extensions](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/extensions.md)
     */
    'import/extensions': ExtensionsRuleOptions;
    /**
     * Enforce which files can be imported in a given folder.
     *
     * @see [no-restricted-paths](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-restricted-paths.md)
     */
    'import/no-restricted-paths': NoRestrictedPathsRuleOptions;
    /**
     * Forbid importing the submodules of other modules.
     *
     * @see [no-internal-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-internal-modules.md)
     */
    'import/no-internal-modules': NoInternalModulesRuleOptions;
    /**
     * Prefer named exports to be grouped together in a single export declaration
     *
     * @see [group-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/group-exports.md)
     */
    'import/group-exports': GroupExportsRuleOptions;
    /**
     * Forbid importing packages through relative paths.
     *
     * @see [no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-relative-packages.md)
     */
    'import/no-relative-packages': NoRelativePackagesRuleOptions;
    /**
     * Forbid importing modules from parent directories.
     *
     * @see [no-relative-parent-imports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-relative-parent-imports.md)
     */
    'import/no-relative-parent-imports': NoRelativeParentImportsRuleOptions;
    /**
     * Enforce or ban the use of inline type-only markers for named imports.
     *
     * @see [consistent-type-specifier-style](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/consistent-type-specifier-style.md)
     */
    'import/consistent-type-specifier-style': ConsistentTypeSpecifierStyleRuleOptions;
    /**
     * Forbid a module from importing itself.
     *
     * @see [no-self-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-self-import.md)
     */
    'import/no-self-import': NoSelfImportRuleOptions;
    /**
     * Forbid a module from importing a module with a dependency path back to itself.
     *
     * @see [no-cycle](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-cycle.md)
     */
    'import/no-cycle': NoCycleRuleOptions;
    /**
     * Forbid named default exports.
     *
     * @see [no-named-default](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-named-default.md)
     */
    'import/no-named-default': NoNamedDefaultRuleOptions;
    /**
     * Forbid use of exported name as identifier of default export.
     *
     * @see [no-named-as-default](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-named-as-default.md)
     */
    'import/no-named-as-default': NoNamedAsDefaultRuleOptions;
    /**
     * Forbid use of exported name as property of default export.
     *
     * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-named-as-default-member.md)
     */
    'import/no-named-as-default-member': NoNamedAsDefaultMemberRuleOptions;
    /**
     * Forbid anonymous values as default exports.
     *
     * @see [no-anonymous-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-anonymous-default-export.md)
     */
    'import/no-anonymous-default-export': NoAnonymousDefaultExportRuleOptions;
    /**
     * Forbid modules without exports, or exports without matching import in another module.
     *
     * @see [no-unused-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-unused-modules.md)
     */
    'import/no-unused-modules': NoUnusedModulesRuleOptions;
    /**
     * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
     *
     * @see [no-commonjs](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-commonjs.md)
     */
    'import/no-commonjs': NoCommonjsRuleOptions;
    /**
     * Forbid AMD `require` and `define` calls.
     *
     * @see [no-amd](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-amd.md)
     */
    'import/no-amd': NoAmdRuleOptions;
    /**
     * Forbid repeated import of the same module in multiple places.
     *
     * @see [no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-duplicates.md)
     */
    'import/no-duplicates': NoDuplicatesRuleOptions;
    /**
     * Ensure all imports appear before other statements.
     *
     * @see [first](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/first.md)
     */
    'import/first': FirstRuleOptions;
    /**
     * Enforce the maximum number of dependencies a module can have.
     *
     * @see [max-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/max-dependencies.md)
     */
    'import/max-dependencies': MaxDependenciesRuleOptions;
    /**
     * Forbid the use of extraneous packages.
     *
     * @see [no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-extraneous-dependencies.md)
     */
    'import/no-extraneous-dependencies': NoExtraneousDependenciesRuleOptions;
    /**
     * Forbid import of modules using absolute paths.
     *
     * @see [no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-absolute-path.md)
     */
    'import/no-absolute-path': NoAbsolutePathRuleOptions;
    /**
     * Forbid Node.js builtin modules.
     *
     * @see [no-nodejs-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-nodejs-modules.md)
     */
    'import/no-nodejs-modules': NoNodejsModulesRuleOptions;
    /**
     * Forbid webpack loader syntax in imports.
     *
     * @see [no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-webpack-loader-syntax.md)
     */
    'import/no-webpack-loader-syntax': NoWebpackLoaderSyntaxRuleOptions;
    /**
     * Enforce a convention in module import order.
     *
     * @see [order](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/order.md)
     */
    'import/order': OrderRuleOptions;
    /**
     * Enforce a newline after import statements.
     *
     * @see [newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/newline-after-import.md)
     */
    'import/newline-after-import': NewlineAfterImportRuleOptions;
    /**
     * Prefer a default export if module exports a single name or multiple names.
     *
     * @see [prefer-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/prefer-default-export.md)
     */
    'import/prefer-default-export': PreferDefaultExportRuleOptions;
    /**
     * Forbid default exports.
     *
     * @see [no-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-default-export.md)
     */
    'import/no-default-export': NoDefaultExportRuleOptions;
    /**
     * Forbid named exports.
     *
     * @see [no-named-export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-named-export.md)
     */
    'import/no-named-export': NoNamedExportRuleOptions;
    /**
     * Forbid `require()` calls with expressions.
     *
     * @see [no-dynamic-require](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-dynamic-require.md)
     */
    'import/no-dynamic-require': NoDynamicRequireRuleOptions;
    /**
     * Forbid potentially ambiguous parse goal (`script` vs. `module`).
     *
     * @see [unambiguous](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/unambiguous.md)
     */
    'import/unambiguous': UnambiguousRuleOptions;
    /**
     * Forbid unassigned imports
     *
     * @see [no-unassigned-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-unassigned-import.md)
     */
    'import/no-unassigned-import': NoUnassignedImportRuleOptions;
    /**
     * Forbid unnecessary path segments in import and require statements.
     *
     * @see [no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-useless-path-segments.md)
     */
    'import/no-useless-path-segments': NoUselessPathSegmentsRuleOptions;
    /**
     * Enforce a leading comment with the webpackChunkName for dynamic imports.
     *
     * @see [dynamic-import-chunkname](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/dynamic-import-chunkname.md)
     */
    'import/dynamic-import-chunkname': DynamicImportChunknameRuleOptions;
    /**
     * Forbid import statements with CommonJS module.exports.
     *
     * @see [no-import-module-exports](undefined)
     */
    'import/no-import-module-exports': NoImportModuleExportsRuleOptions;
    /**
     * Forbid empty named import blocks.
     *
     * @see [no-empty-named-blocks](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-empty-named-blocks.md)
     */
    'import/no-empty-named-blocks': NoEmptyNamedBlocksRuleOptions;
    /**
     * Ensure all exports appear after other statements.
     *
     * @see [exports-last](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/exports-last.md)
     */
    'import/exports-last': ExportsLastRuleOptions;
    /**
     * Forbid imported names marked with `@deprecated` documentation tag.
     *
     * @see [no-deprecated](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-deprecated.md)
     */
    'import/no-deprecated': NoDeprecatedRuleOptions;
    /**
     * Replaced by `import/first`.
     *
     * @see [imports-first](https://github.com/import-js/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)
     */
    'import/imports-first': ImportsFirstRuleOptions;
  }

  export interface CustomSettings extends Settings {}
}
