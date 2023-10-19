export type Schema0 = 'always' | 'any' | 'never';

export interface Schema1 {
  applyToEndTag?: boolean;
  count?: number;
  endLines?: number | null;
  startLines?: number | null;
  tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: {
      count?: number;
      lines?: 'always' | 'never' | 'any';
    };
  };
}

export type TagLinesRuleOptions = [Schema0?, Schema1?];
