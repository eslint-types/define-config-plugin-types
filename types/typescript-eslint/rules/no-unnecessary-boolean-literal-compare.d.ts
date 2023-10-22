export interface Schema0 {
  /**
   * Whether to allow comparisons between nullable boolean variables and `true`.
   */
  allowComparingNullableBooleansToTrue?: boolean;
  /**
   * Whether to allow comparisons between nullable boolean variables and `false`.
   */
  allowComparingNullableBooleansToFalse?: boolean;
}

export type NoUnnecessaryBooleanLiteralCompareRuleOptions = [Schema0?];
