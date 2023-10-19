export interface Schema0 {
  contexts: Array<
    | string
    | {
        comment?: string;
        context?: string;
        message?: string;
      }
  >;
}

export type NoRestrictedSyntaxRuleOptions = [Schema0?];
