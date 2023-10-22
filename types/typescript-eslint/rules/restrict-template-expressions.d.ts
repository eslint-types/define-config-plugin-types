export interface Schema0 {
  /**
   * Whether to allow `any` typed values in template expressions.
   */
  allowAny?: boolean;
  /**
   * Whether to allow `boolean` typed values in template expressions.
   */
  allowBoolean?: boolean;
  /**
   * Whether to allow `nullish` typed values in template expressions.
   */
  allowNullish?: boolean;
  /**
   * Whether to allow `number` typed values in template expressions.
   */
  allowNumber?: boolean;
  /**
   * Whether to allow `regexp` typed values in template expressions.
   */
  allowRegExp?: boolean;
  /**
   * Whether to allow `never` typed values in template expressions.
   */
  allowNever?: boolean;
}

export type RestrictTemplateExpressionsRuleOptions = [Schema0?];
