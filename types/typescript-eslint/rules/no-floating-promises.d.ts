export interface Schema0 {
  /**
   * Whether to ignore `void` expressions.
   */
  ignoreVoid?: boolean;
  /**
   * Whether to ignore async IIFEs (Immediately Invoked Function Expressions).
   */
  ignoreIIFE?: boolean;
}

export type NoFloatingPromisesRuleOptions = [Schema0?];
