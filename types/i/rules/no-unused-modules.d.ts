export type Schema0 = (
  | {
      unusedExports: true;
      src?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      missingExports: true;
      [k: string]: unknown;
    }
) & {
  /**
   * files/paths to be analyzed (only for unused exports)
   */
  src?: string[];
  /**
   * files/paths for which unused exports will not be reported (e.g module entry points)
   */
  ignoreExports?: string[];
  /**
   * report modules without any exports
   */
  missingExports?: boolean;
  /**
   * report exports without any usage
   */
  unusedExports?: boolean;
  [k: string]: unknown;
};

export type NoUnusedModulesRuleOptions = [Schema0?];
