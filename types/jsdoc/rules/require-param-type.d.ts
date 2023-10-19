export interface Schema0 {
  contexts?: Array<
    | string
    | {
        comment?: string;
        context?: string;
      }
  >;
  defaultDestructuredRootType?: string;
  setDefaultDestructuredRootType?: boolean;
}

export type RequireParamTypeRuleOptions = [Schema0?];
