/**
 * Import settings.
 */
export interface ISettings {
  /**
   * A list of file extensions that will be parsed as modules and inspected for `export`s.
   *
   * @see [i/extensions](https://github.com/un-es/eslint-plugin-i/blob/fork-release/README.md#importextensions)
   */
  'i/extensions'?: string[];

  /**
   * If you require more granular extension definitions.
   *
   * @see [i/resolver](https://github.com/un-es/eslint-plugin-i/blob/fork-release/README.md#importresolver)
   */
  'i/resolver'?: string | Record<string, unknown>;

  /**
   * A list of regex strings that, if matched by a path, will not report the matching module if no `exports` are found.
   *
   * @see [i/ignore](https://github.com/un-es/eslint-plugin-i/blob/fork-release/README.md#importignore)
   */
  'i/ignore'?: string[];

  /**
   * An array of additional modules to consider as "core" modules--modules that should be considered resolved but have no path on the filesystem.
   *
   * @see [i/core-modules](https://github.com/un-es/eslint-plugin-i/blob/fork-release/README.md#importcore-modules)
   */
  'i/core-modules'?: string[];

  /**
   * An array of folders. Resolved modules only from those folders will be considered as "external".
   *
   * @default ["node_modules"]
   *
   * @see [i/external-module-folders](https://github.com/un-es/eslint-plugin-i/blob/fork-release/README.md#importexternal-module-folders)
   */
  'i/external-module-folders'?: string[];

  /**
   * A map from parsers to file extension arrays.
   *
   * @see [i/parsers](https://github.com/un-es/eslint-plugin-i/blob/fork-release/README.md#importparsers)
   */
  'i/parsers'?: Partial<Record<string, string[]>>;

  /**
   * Settings for cache behavior.
   *
   * @see [i/cache](https://github.com/un-es/eslint-plugin-i/blob/fork-release/README.md#importcache)
   */
  'i/cache'?: { lifetime?: number } & Record<string, unknown>;

  /**
   * A regex for packages should be treated as internal.
   *
   * Useful when you are utilizing a monorepo setup or developing a set of packages that depend on each other.
   *
   * @see [i/internal-regex](https://github.com/un-es/eslint-plugin-i/blob/fork-release/README.md#importinternal-regex)
   */
  'i/internal-regex'?: string;
}

export type { ISettings as Settings };
