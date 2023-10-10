declare module "eslint-define-config" {
  export interface CustomExtends {
    "plugin:deprecation/recommended": void;
  }

  export interface CustomPlugins {
    deprecation: void;
  }

  export interface CustomRuleOptions {
    /**
     * Do not use deprecated APIs.
     *
     * @see [deprecation](https://github.com/gund/eslint-plugin-deprecation)
     */
    "deprecation/deprecation": [];
  }
}
