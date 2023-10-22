export interface Schema0 {
  /**
   * Whether to ignore destructurings, such as `const { props, state } = this`.
   */
  allowDestructuring?: boolean;
  /**
   * Names to ignore, such as ["self"] for `const self = this;`.
   */
  allowedNames?: string[];
}

export type NoThisAliasRuleOptions = [Schema0?];
