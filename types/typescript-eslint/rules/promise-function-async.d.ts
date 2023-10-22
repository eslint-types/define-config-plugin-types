export interface Schema0 {
  /**
   * Whether to consider `any` and `unknown` to be Promises.
   */
  allowAny?: boolean;
  /**
   * Any extra names of classes or interfaces to be considered Promises.
   */
  allowedPromiseNames?: string[];
  checkArrowFunctions?: boolean;
  checkFunctionDeclarations?: boolean;
  checkFunctionExpressions?: boolean;
  checkMethodDeclarations?: boolean;
}

export type PromiseFunctionAsyncRuleOptions = [Schema0?];
