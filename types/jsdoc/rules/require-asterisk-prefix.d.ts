export type Schema0 = 'always' | 'never' | 'any';

export interface Schema1 {
  tags?: {
    always?: string[];
    any?: string[];
    never?: string[];
    [k: string]: unknown;
  };
}

export type RequireAsteriskPrefixRuleOptions = [Schema0?, Schema1?];
