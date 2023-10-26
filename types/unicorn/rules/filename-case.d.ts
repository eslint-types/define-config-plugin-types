export type Schema0 =
  | {
      case?: 'camelCase' | 'snakeCase' | 'kebabCase' | 'pascalCase';
      ignore?: unknown[];
    }
  | {
      cases?: {
        camelCase?: boolean;
        snakeCase?: boolean;
        kebabCase?: boolean;
        pascalCase?: boolean;
      };
      ignore?: unknown[];
    };

export type FilenameCaseRuleOptions = [Schema0?];
