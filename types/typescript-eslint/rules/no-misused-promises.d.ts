export interface Schema0 {
  checksConditionals?: boolean;
  checksVoidReturn?:
    | boolean
    | {
        arguments?: boolean;
        attributes?: boolean;
        properties?: boolean;
        returns?: boolean;
        variables?: boolean;
      };
  checksSpreads?: boolean;
}

export type NoMisusedPromisesRuleOptions = [Schema0?];
