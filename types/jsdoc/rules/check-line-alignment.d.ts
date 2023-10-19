export type Schema0 = 'always' | 'never' | 'any';

export interface Schema1 {
  customSpacings?: {
    postDelimiter?: number;
    postHyphen?: number;
    postName?: number;
    postTag?: number;
    postType?: number;
  };
  preserveMainDescriptionPostDelimiter?: boolean;
  tags?: string[];
  wrapIndent?: string;
}

export type CheckLineAlignmentRuleOptions = [Schema0?, Schema1?];
