export interface Schema0 {
  allowMultipleTags?: boolean;
  minimumLengthForMultiline?: number;
  multilineTags?: '*' | string[];
  noFinalLineText?: boolean;
  noMultilineBlocks?: boolean;
  noSingleLineBlocks?: boolean;
  noZeroLineText?: boolean;
  singleLineTags?: string[];
}

export type MultilineBlocksRuleOptions = [Schema0?];
