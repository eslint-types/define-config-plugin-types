export interface Schema0 {
  exemptTagContexts?: Array<{
    tag?: string;
    types?: boolean | string[];
  }>;
  noDefaults?: boolean;
  unifyParentAndChildTypeChecks?: boolean;
}

export type CheckTypesRuleOptions = [Schema0?];
