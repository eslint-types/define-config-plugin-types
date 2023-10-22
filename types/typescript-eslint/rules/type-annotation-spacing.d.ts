export interface Schema0 {
  before?: boolean;
  after?: boolean;
  overrides?: {
    colon?: SpacingConfig;
    arrow?: SpacingConfig;
    variable?: SpacingConfig;
    parameter?: SpacingConfig;
    property?: SpacingConfig;
    returnType?: SpacingConfig;
  };
}
export interface SpacingConfig {
  before?: boolean;
  after?: boolean;
}

export type TypeAnnotationSpacingRuleOptions = [Schema0?];
