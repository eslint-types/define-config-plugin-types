export interface Schema0 {
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
  ignoreConditionalTests?: boolean;
  ignoreMixedLogicalExpressions?: boolean;
  ignorePrimitives?:
    | {
        bigint?: boolean;
        boolean?: boolean;
        number?: boolean;
        string?: boolean;
        [k: string]: unknown;
      }
    | true;
  ignoreTernaryTests?: boolean;
}

export type PreferNullishCoalescingRuleOptions = [Schema0?];
