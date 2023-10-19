export interface Schema0 {
  match: Array<{
    allowName?: string;
    comment?: string;
    context?: string;
    disallowName?: string;
    message?: string;
    tags?: string[];
    [k: string]: unknown;
  }>;
}

export type MatchNameRuleOptions = [Schema0?];
