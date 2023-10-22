export interface Schema0 {
  allowInlineConfig?: boolean;
  baseConfig?: {
    [k: string]: unknown;
  };
  captionRequired?: boolean;
  checkDefaults?: boolean;
  checkEslintrc?: boolean;
  checkParams?: boolean;
  checkProperties?: boolean;
  configFile?: string;
  exampleCodeRegex?: string;
  matchingFileName?: string;
  matchingFileNameDefaults?: string;
  matchingFileNameParams?: string;
  matchingFileNameProperties?: string;
  noDefaultExampleRules?: boolean;
  paddedIndent?: number;
  rejectExampleCodeRegex?: string;
  reportUnusedDisableDirectives?: boolean;
}

export type CheckExamplesRuleOptions = [Schema0?];
