export interface Schema0 {
  /**
   * Whether to ignore constant loop conditions, such as `while (true)`.
   */
  allowConstantLoopConditions?: boolean;
  /**
   * Whether to not error when running with a tsconfig that has strictNullChecks turned.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
}

export type NoUnnecessaryConditionRuleOptions = [Schema0?];
