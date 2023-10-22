export type BanConfig =
  | null
  | false
  | true
  | string
  | {
      /**
       * Custom error message
       */
      message?: string;
      /**
       * Type to autofix replace with. Note that autofixers can be applied automatically - so you need to be careful with this option.
       */
      fixWith?: string;
      /**
       * Types to suggest replacing with.
       */
      suggest?: string[];
    };

export interface Schema0 {
  types?: {
    [k: string]: BanConfig;
  };
  extendDefaults?: boolean;
}

export type BanTypesRuleOptions = [Schema0?];
