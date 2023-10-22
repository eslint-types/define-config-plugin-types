export interface Schema0 {
  contexts?: Array<
    | string
    | {
        comment?: string;
        context?: string;
        message?: string;
        minimum?: number;
      }
  >;
}

export type NoMissingSyntaxRuleOptions = [Schema0?];
