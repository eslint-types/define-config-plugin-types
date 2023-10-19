export interface Schema0 {
  contexts?: Array<
    | string
    | {
        comment?: string;
        context?: string;
      }
  >;
  exemptedBy?: string[];
  forceRequireNext?: boolean;
  forceRequireYields?: boolean;
  next?: boolean;
  nextWithGeneratorTag?: boolean;
  withGeneratorTag?: boolean;
}

export type RequireYieldsRuleOptions = [Schema0?];
