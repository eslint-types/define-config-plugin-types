export type Schema0 =
  | []
  | [
      {
        checkImport?: boolean;
        checkDynamicImport?: boolean;
        checkExportFrom?: boolean;
        checkRequire?: boolean;
        extendDefaultStyles?: boolean;
        styles?: ModuleStyles;
      },
    ];
export type Styles = false | BooleanObject;

export interface ModuleStyles {
  [k: string]: Styles;
}
export interface BooleanObject {
  [k: string]: boolean;
}

export type ImportStyleRuleOptions = Schema0;
