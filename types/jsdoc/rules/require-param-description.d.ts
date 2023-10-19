export interface Schema0 {
  contexts?: Array<
    | string
    | {
        comment?: string;
        context?: string;
      }
  >;
  defaultDestructuredRootDescription?: string;
  setDefaultDestructuredRootDescription?: boolean;
}

export type RequireParamDescriptionRuleOptions = [Schema0?];
