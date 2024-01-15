export interface Schema0 {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
  caseSensitive?: boolean;
  caseSensitiveStrict?: boolean;
}

export type NoUnresolvedRuleOptions = [Schema0?];
