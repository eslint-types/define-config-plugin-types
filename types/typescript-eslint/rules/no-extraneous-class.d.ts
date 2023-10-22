export interface Schema0 {
  /**
   * Whether to allow extraneous classes that contain only a constructor.
   */
  allowConstructorOnly?: boolean;
  /**
   * Whether to allow extraneous classes that have no body (i.e. are empty).
   */
  allowEmpty?: boolean;
  /**
   * Whether to allow extraneous classes that only contain static members.
   */
  allowStaticOnly?: boolean;
  /**
   * Whether to allow extraneous classes that include a decorator.
   */
  allowWithDecorator?: boolean;
}

export type NoExtraneousClassRuleOptions = [Schema0?];
