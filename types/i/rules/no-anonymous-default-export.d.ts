export interface Schema0 {
  /**
   * If `false`, will report default export of an array
   */
  allowArray?: boolean;
  /**
   * If `false`, will report default export of an arrow function
   */
  allowArrowFunction?: boolean;
  /**
   * If `false`, will report default export of a function call
   */
  allowCallExpression?: boolean;
  /**
   * If `false`, will report default export of an anonymous class
   */
  allowAnonymousClass?: boolean;
  /**
   * If `false`, will report default export of an anonymous function
   */
  allowAnonymousFunction?: boolean;
  /**
   * If `false`, will report default export of a literal
   */
  allowLiteral?: boolean;
  /**
   * If `false`, will report default export of an object expression
   */
  allowObject?: boolean;
  /**
   * If `false`, will report default export of a class instantiation
   */
  allowNew?: boolean;
}

export type NoAnonymousDefaultExportRuleOptions = [Schema0?];
