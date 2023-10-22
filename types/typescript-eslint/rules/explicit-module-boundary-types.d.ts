export interface Schema0 {
  /**
   * Whether to ignore arguments that are explicitly typed as `any`.
   */
  allowArgumentsExplicitlyTypedAsAny?: boolean;
  /**
   * Whether to ignore return type annotations on body-less arrow functions that return an `as const` type assertion.
   * You must still type the parameters of the function.
   */
  allowDirectConstAssertionInArrowFunctions?: boolean;
  /**
   * An array of function/method names that will not have their arguments or return values checked.
   */
  allowedNames?: string[];
  /**
   * Whether to ignore return type annotations on functions immediately returning another function expression.
   * You must still type the parameters of the function.
   */
  allowHigherOrderFunctions?: boolean;
  /**
   * Whether to ignore type annotations on the variable of a function expresion.
   */
  allowTypedFunctionExpressions?: boolean;
}

export type ExplicitModuleBoundaryTypesRuleOptions = [Schema0?];
