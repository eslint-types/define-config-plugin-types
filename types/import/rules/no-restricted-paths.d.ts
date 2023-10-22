export interface Schema0 {
  /**
   * @minItems 1
   */
  zones?: [
    {
      target?: string | string[];
      from?: string | string[];
      except?: string[];
      message?: string;
    },
    ...Array<{
      target?: string | string[];
      from?: string | string[];
      except?: string[];
      message?: string;
    }>,
  ];
  basePath?: string;
}

export type NoRestrictedPathsRuleOptions = [Schema0?];
