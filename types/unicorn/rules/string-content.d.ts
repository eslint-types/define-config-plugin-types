export interface Schema0 {
  patterns?: {
    [k: string]:
      | string
      | {
          suggest: string;
          fix?: boolean;
          message?: string;
        };
  };
}

export type StringContentRuleOptions = [Schema0?];
