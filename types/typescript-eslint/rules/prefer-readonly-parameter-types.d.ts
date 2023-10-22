export interface Schema0 {
  allow?: Array<
    | string
    | {
        from: 'file';
        name: string | [string, ...string[]];
        path?: string;
      }
    | {
        from: 'lib';
        name: string | [string, ...string[]];
      }
    | {
        from: 'package';
        name: string | [string, ...string[]];
        package: string;
      }
  >;
  checkParameterProperties?: boolean;
  ignoreInferredTypes?: boolean;
  treatMethodsAsReadonly?: boolean;
}

export type PreferReadonlyParameterTypesRuleOptions = [Schema0?];
