export interface Schema0 {
  builtinGlobals?: boolean;
  hoist?: 'all' | 'functions' | 'never';
  allow?: string[];
  ignoreOnInitialization?: boolean;
  ignoreTypeValueShadow?: boolean;
  ignoreFunctionTypeParameterNameValueShadow?: boolean;
}

export type NoShadowRuleOptions = [Schema0?];
