export interface Schema0 {
  minimumCases?: number;
  emptyDefaultCase?:
    | 'no-default-comment'
    | 'do-nothing-comment'
    | 'no-default-case';
}

export type PreferSwitchRuleOptions = [Schema0?];
