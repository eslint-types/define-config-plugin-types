export interface Schema0 {
  checkConstructors?: boolean;
  checkGetters?: boolean;
  contexts?: Array<
    | string
    | {
        comment?: string;
        context?: string;
        forceRequireReturn?: boolean;
      }
  >;
  enableFixer?: boolean;
  exemptedBy?: string[];
  forceRequireReturn?: boolean;
  forceReturnsWithAsync?: boolean;
  publicOnly?:
    | boolean
    | {
        ancestorsOnly?: boolean;
        cjs?: boolean;
        esm?: boolean;
        window?: boolean;
      };
}

export type RequireReturnsRuleOptions = [Schema0?];
