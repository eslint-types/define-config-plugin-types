export interface ParserOptions {
  /**
   * The identifier that's used for JSX Elements creation (after transpilation).
   * If you're using a library other than React (like `preact`), then you should change this value.
   * If you are using the [new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) you can set this to `null`.
   *
   * This should not be a member expression - just the root identifier (i.e. use `"React"` instead of `"React.createElement"`).
   *
   * If you provide `parserOptions.project`, you do not need to set this, as it will automatically detected from the compiler.
   *
   * @default 'React'
   *
   * @see [jsxPragma](https://typescript-eslint.io/architecture/parser#jsxpragma)
   */
  jsxPragma?: string;

  /**
   * The identifier that's used for JSX fragment elements (after transpilation).
   * If `null`, assumes transpilation will always use a member of the configured `jsxPragma`.
   * This should not be a member expression - just the root identifier (i.e. use `"h"` instead of `"h.Fragment"`).
   *
   * If you provide `parserOptions.project`, you do not need to set this, as it will automatically detected from the compiler.
   *
   * @default null
   *
   * @see [jsxFragmentName](https://typescript-eslint.io/architecture/parser#jsxfragmentname)
   */
  jsxFragmentName?: string | null;

  /**
   * For valid options, see the [TypeScript compiler options](https://www.typescriptlang.org/tsconfig#lib).
   *
   * Specifies the TypeScript `libs` that are available.
   * This is used by the scope analyser to ensure there are global variables declared for the types exposed by TypeScript.
   *
   * If you provide `parserOptions.project`, you do not need to set this, as it will automatically detected from the compiler.
   *
   * @default ['es2018']
   *
   * @see [lib](https://typescript-eslint.io/architecture/parser/#lib)
   */
  lib?: string[];

  comment?: boolean;

  errorOnTypeScriptSyntacticAndSemanticIssues?: boolean;

  errorOnUnknownASTType?: boolean;

  /**
   * This option allows you to provide one or more additional file extensions which should be considered in the TypeScript Program compilation.
   *
   * The default extensions are `.ts`, `.tsx`, `.js`, and `.jsx`. Add extensions starting with `.`, followed by the file extension.
   * E.g. for a `.vue` file use `"extraFileExtensions: [".vue"]`.
   *
   * @see [extraFileExtensions](https://typescript-eslint.io/architecture/parser/#extrafileextensions)
   */
  extraFileExtensions?: string[];

  filePath?: string;

  loc?: boolean;

  /**
   * Parser.
   *
   * @see [Working with Custom Parsers](https://eslint.org/docs/developer-guide/working-with-custom-parsers)
   * @see [Specifying Parser](https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser)
   */
  parser?: string;

  /**
   * This option allows you to provide a path to your project's `tsconfig.json`.
   * **This setting is required if you want to use rules which require type information.**
   * Relative paths are interpreted relative to the current working directory if `tsconfigRootDir` is not set.
   * If you intend on running ESLint from directories other than the project root, you should consider using `tsconfigRootDir`.
   *
   * @default undefined
   *
   * @see [project](https://typescript-eslint.io/architecture/parser/#project)
   */
  project?: string | string[] | true | null;

  /**
   * This option allows you to ignore folders from being included in your provided list of `project`s.
   * This is useful if you have configured glob patterns, but want to make sure you ignore certain folders.
   *
   * It accepts an array of globs to exclude from the `project` globs.
   *
   * For example, by default it will ensure that a glob like `./**‎/tsconfig.json` will not match any `tsconfigs` within your `node_modules` folder (some npm packages do not exclude their source files from their published packages).
   *
   * @default ['**‎/node_modules/**']
   *
   * @see [projectFolderIgnoreList](https://typescript-eslint.io/architecture/parser/#projectfolderignorelist)
   */
  projectFolderIgnoreList?: Array<string | RegExp>;

  range?: boolean;

  tokens?: boolean;

  /**
   * This option allows you to provide the root directory for relative tsconfig paths specified in the `project` option above.
   *
   * @see [tsconfigRootDir](https://typescript-eslint.io/architecture/parser/#tsconfigrootdir)
   */
  tsconfigRootDir?: string;

  useJSXTextNode?: boolean;

  /**
   * This option allows you to toggle the warning that the parser will give you if you use a version of TypeScript which is not explicitly supported.
   *
   * @default true
   *
   * @see [warnOnUnsupportedTypeScriptVersion](https://typescript-eslint.io/architecture/parser/#warnonunsupportedtypescriptversion)
   */
  warnOnUnsupportedTypeScriptVersion?: boolean;

  /**
   * This option allow you to tell parser to act as if `emitDecoratorMetadata: true` is set in `tsconfig.json`, but without [type-aware linting](https://typescript-eslint.io/linting/typed-linting).
   * In other words, you don't have to specify `parserOptions.project` in this case, making the linting process faster.
   *
   * @default undefined
   *
   * @see [emitDecoratorMetadata](https://typescript-eslint.io/architecture/parser/#emitdecoratormetadata)
   */
  emitDecoratorMetadata?: boolean;
}
