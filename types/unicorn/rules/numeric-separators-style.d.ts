export interface Schema0 {
  binary?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  octal?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  hexadecimal?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  number?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  onlyIfContainsSeparator?: boolean;
}

export type NumericSeparatorsStyleRuleOptions = [Schema0?];
