export interface Schema0 {
  contexts?: Array<
    | string
    | {
        comment?: string;
        context?: string;
      }
  >;
  exemptedBy?: string[];
}

export type RequireThrowsRuleOptions = [Schema0?];
