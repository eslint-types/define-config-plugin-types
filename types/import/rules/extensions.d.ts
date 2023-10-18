export type Schema0 =
  | []
  | ['always' | 'ignorePackages' | 'never']
  | [
      'always' | 'ignorePackages' | 'never',
      {
        pattern?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` ".*".
           */
          [k: string]: 'always' | 'ignorePackages' | 'never';
        };
        ignorePackages?: boolean;
        [k: string]: unknown;
      },
    ]
  | [
      {
        pattern?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` ".*".
           */
          [k: string]: 'always' | 'ignorePackages' | 'never';
        };
        ignorePackages?: boolean;
        [k: string]: unknown;
      },
    ]
  | [
      {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".*".
         */
        [k: string]: 'always' | 'ignorePackages' | 'never';
      },
    ]
  | [
      'always' | 'ignorePackages' | 'never',
      {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".*".
         */
        [k: string]: 'always' | 'ignorePackages' | 'never';
      },
    ];

export type ExtensionsRuleOptions = [Schema0?];
