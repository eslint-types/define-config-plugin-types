export interface Schema0 {
  groups?: unknown[];
  pathGroupsExcludedImportTypes?: unknown[];
  distinctGroup?: boolean;
  pathGroups?: Array<{
    pattern: string;
    patternOptions?: {
      [k: string]: unknown;
    };
    group:
      | 'builtin'
      | 'external'
      | 'internal'
      | 'unknown'
      | 'parent'
      | 'sibling'
      | 'index'
      | 'object'
      | 'type';
    position?: 'after' | 'before';
  }>;
  'newlines-between'?:
    | 'ignore'
    | 'always'
    | 'always-and-inside-groups'
    | 'never';
  alphabetize?: {
    caseInsensitive?: boolean;
    order?: 'ignore' | 'asc' | 'desc';
    orderImportKind?: 'ignore' | 'asc' | 'desc';
  };
  warnOnUnassignedImports?: boolean;
}

export type OrderRuleOptions = [Schema0?];
