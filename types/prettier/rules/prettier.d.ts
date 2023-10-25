export interface Schema0 {
  [k: string]: unknown;
}

export interface Schema1 {
  usePrettierrc?: boolean;
  fileInfoOptions?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export type PrettierRuleOptions = [Schema0?, Schema1?];
