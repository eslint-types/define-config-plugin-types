export interface Schema0 {
  autoIncrementBase?: number;
  checkConstructors?: boolean;
  checkDestructured?: boolean;
  checkDestructuredRoots?: boolean;
  checkGetters?: boolean;
  checkRestProperty?: boolean;
  checkSetters?: boolean;
  checkTypesPattern?: string;
  contexts?: Array<
    | string
    | {
        comment?: string;
        context?: string;
      }
  >;
  enableFixer?: boolean;
  enableRestElementFixer?: boolean;
  enableRootFixer?: boolean;
  exemptedBy?: string[];
  unnamedRootBase?: string[];
  useDefaultObjectProperties?: boolean;
}

export type RequireParamRuleOptions = [Schema0?];
