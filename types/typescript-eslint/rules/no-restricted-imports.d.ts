export type Schema0 =
  | Array<
      | string
      | {
          name: string;
          message?: string;
          importNames?: string[];
          /**
           * Disallow value imports, but allow type-only imports.
           */
          allowTypeImports?: boolean;
        }
    >
  | []
  | [
      {
        paths?: Array<
          | string
          | {
              name: string;
              message?: string;
              importNames?: string[];
              /**
               * Disallow value imports, but allow type-only imports.
               */
              allowTypeImports?: boolean;
            }
        >;
        patterns?:
          | string[]
          | Array<{
              /**
               * @minItems 1
               */
              importNames?: [string, ...string[]];
              /**
               * @minItems 1
               */
              group: [string, ...string[]];
              message?: string;
              caseSensitive?: boolean;
              /**
               * Disallow value imports, but allow type-only imports.
               */
              allowTypeImports?: boolean;
            }>;
      },
    ];

export type NoRestrictedImportsRuleOptions = Schema0;
