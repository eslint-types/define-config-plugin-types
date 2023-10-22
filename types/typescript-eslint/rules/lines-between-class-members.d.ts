export type Schema0 =
  | {
      /**
       * @minItems 1
       */
      enforce: [
        {
          blankLine: 'always' | 'never';
          prev: 'method' | 'field' | '*';
          next: 'method' | 'field' | '*';
        },
        ...Array<{
          blankLine: 'always' | 'never';
          prev: 'method' | 'field' | '*';
          next: 'method' | 'field' | '*';
        }>,
      ];
    }
  | ('always' | 'never');

export interface Schema1 {
  exceptAfterSingleLine?: boolean;
  exceptAfterOverload?: boolean;
}

export type LinesBetweenClassMembersRuleOptions = [Schema0?, Schema1?];
