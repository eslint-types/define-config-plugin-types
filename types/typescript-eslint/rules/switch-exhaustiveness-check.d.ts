export interface Schema0 {
  /**
   * If 'true', allow 'default' cases on switch statements with exhaustive cases.
   */
  allowDefaultCaseForExhaustiveSwitch?: boolean;
  /**
   * If 'true', require a 'default' clause for switches on non-union types.
   */
  requireDefaultForNonUnion?: boolean;
}

export type SwitchExhaustivenessCheckRuleOptions = [Schema0?];
