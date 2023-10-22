export interface Schema0 {
  checkConstructors?: boolean;
  checkGetters?: boolean | 'no-setter';
  checkSetters?: boolean | 'no-getter';
  contexts?: Array<
    | string
    | {
        context?: string;
        inlineCommentBlock?: boolean;
        minLineCount?: number;
      }
  >;
  enableFixer?: boolean;
  exemptEmptyConstructors?: boolean;
  exemptEmptyFunctions?: boolean;
  fixerMessage?: string;
  minLineCount?: number;
  publicOnly?:
    | boolean
    | {
        ancestorsOnly?: boolean;
        cjs?: boolean;
        esm?: boolean;
        window?: boolean;
      };
  require?: {
    ArrowFunctionExpression?: boolean;
    ClassDeclaration?: boolean;
    ClassExpression?: boolean;
    FunctionDeclaration?: boolean;
    FunctionExpression?: boolean;
    MethodDefinition?: boolean;
  };
}

export type RequireJsdocRuleOptions = [Schema0?];
