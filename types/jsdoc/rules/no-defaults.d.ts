export interface Schema0 {
  contexts?: Array<
    | string
    | {
        comment?: string;
        context?: string;
      }
  >;
  noOptionalParamNames?: boolean;
}

export type NoDefaultsRuleOptions = [Schema0?];
