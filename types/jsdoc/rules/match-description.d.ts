export interface Schema0 {
  contexts?: Array<
    | string
    | {
        comment?: string;
        context?: string;
      }
  >;
  mainDescription?:
    | string
    | boolean
    | {
        match?: string | boolean;
        message?: string;
      };
  matchDescription?: string;
  message?: string;
  nonemptyTags?: boolean;
  tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]:
      | string
      | true
      | {
          match?: string | true;
          message?: string;
        };
  };
}

export type MatchDescriptionRuleOptions = [Schema0?];
