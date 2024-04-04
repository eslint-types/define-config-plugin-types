export type Schema0 =
  | {
      case?: 'camelCase' | 'snakeCase' | 'kebabCase' | 'pascalCase';
      ignore?: unknown[];
      multipleFileExtensions?: boolean;
    }
  | {
      cases?: {
        camelCase?: boolean;
        snakeCase?: boolean;
        kebabCase?: boolean;
        pascalCase?: boolean;
      };
      ignore?: unknown[];
      multipleFileExtensions?: boolean;
    };

export type FilenameCaseRuleOptions = [Schema0?];
