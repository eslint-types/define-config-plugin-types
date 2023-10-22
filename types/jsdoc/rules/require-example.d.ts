export interface Schema0 {
  checkConstructors?: boolean;
  checkGetters?: boolean;
  checkSetters?: boolean;
  contexts?: Array<
    | string
    | {
        comment?: string;
        context?: string;
      }
  >;
  enableFixer?: boolean;
  exemptedBy?: string[];
  exemptNoArguments?: boolean;
}

export type RequireExampleRuleOptions = [Schema0?];
