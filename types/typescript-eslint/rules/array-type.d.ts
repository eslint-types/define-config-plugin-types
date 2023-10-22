export interface Schema0 {
  /**
   * The array type expected for mutable cases.
   */
  default?: 'array' | 'generic' | 'array-simple';
  /**
   * The array type expected for readonly cases. If omitted, the value for `default` will be used.
   */
  readonly?: 'array' | 'generic' | 'array-simple';
}

export type ArrayTypeRuleOptions = [Schema0?];
