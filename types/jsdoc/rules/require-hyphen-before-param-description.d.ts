export type Schema0 = 'always' | 'never';

export interface Schema1 {
  tags?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".*".
         */
        [k: string]: 'always' | 'never';
      }
    | 'any';
}

export type RequireHyphenBeforeParamDescriptionRuleOptions = [
  Schema0?,
  Schema1?,
];
