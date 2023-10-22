export type Schema0 =
  | 'nofunc'
  | {
      functions?: boolean;
      classes?: boolean;
      enums?: boolean;
      variables?: boolean;
      typedefs?: boolean;
      ignoreTypeReferences?: boolean;
      allowNamedExports?: boolean;
    };

export type NoUseBeforeDefineRuleOptions = [Schema0?];
