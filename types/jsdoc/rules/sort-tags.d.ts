export interface Schema0 {
  alphabetizeExtras?: boolean;
  linesBetween?: number;
  reportIntraTagGroupSpacing?: boolean;
  reportTagGroupSpacing?: boolean;
  tagSequence?: Array<{
    tags?: string[];
    [k: string]: unknown;
  }>;
}

export type SortTagsRuleOptions = [Schema0?];
