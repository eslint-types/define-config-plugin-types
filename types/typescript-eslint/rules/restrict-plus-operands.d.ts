export interface Schema0 {
  /**
   * Whether to allow `any` typed values.
   */
  allowAny?: boolean;
  /**
   * Whether to allow `boolean` typed values.
   */
  allowBoolean?: boolean;
  /**
   * Whether to allow potentially `null` or `undefined` typed values.
   */
  allowNullish?: boolean;
  /**
   * Whether to allow `bigint`/`number` typed values and `string` typed values to be added together.
   */
  allowNumberAndString?: boolean;
  /**
   * Whether to allow `regexp` typed values.
   */
  allowRegExp?: boolean;
  /**
   * Whether to skip compound assignments such as `+=`.
   */
  skipCompoundAssignments?: boolean;
}

export type RestrictPlusOperandsRuleOptions = [Schema0?];
