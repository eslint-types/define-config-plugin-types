export type Schema0 =
  | []
  | [
      {
        checkProperties?: boolean;
        checkVariables?: boolean;
        checkDefaultAndNamespaceImports?: boolean | string;
        checkShorthandImports?: boolean | string;
        checkShorthandProperties?: boolean;
        checkFilenames?: boolean;
        extendDefaultReplacements?: boolean;
        replacements?: Abbreviations;
        extendDefaultAllowList?: boolean;
        allowList?: BooleanObject;
        ignore?: unknown[];
      },
    ];
export type Replacements = false | BooleanObject;

export interface Abbreviations {
  [k: string]: Replacements;
}
export interface BooleanObject {
  [k: string]: boolean;
}

export type PreventAbbreviationsRuleOptions = Schema0;
