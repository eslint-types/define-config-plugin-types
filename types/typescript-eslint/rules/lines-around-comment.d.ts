export interface Schema0 {
  beforeBlockComment?: boolean;
  afterBlockComment?: boolean;
  beforeLineComment?: boolean;
  afterLineComment?: boolean;
  allowBlockStart?: boolean;
  allowBlockEnd?: boolean;
  allowClassStart?: boolean;
  allowClassEnd?: boolean;
  allowObjectStart?: boolean;
  allowObjectEnd?: boolean;
  allowArrayStart?: boolean;
  allowArrayEnd?: boolean;
  allowInterfaceStart?: boolean;
  allowInterfaceEnd?: boolean;
  allowTypeStart?: boolean;
  allowTypeEnd?: boolean;
  allowEnumStart?: boolean;
  allowEnumEnd?: boolean;
  allowModuleStart?: boolean;
  allowModuleEnd?: boolean;
  ignorePattern?: string;
  applyDefaultIgnorePatterns?: boolean;
}

export type LinesAroundCommentRuleOptions = [Schema0?];
