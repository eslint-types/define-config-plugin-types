export interface Schema0 {
  detectObjects?: boolean;
  enforceConst?: boolean;
  ignore?: Array<number | string>;
  ignoreArrayIndexes?: boolean;
  ignoreDefaultValues?: boolean;
  ignoreClassFieldInitialValues?: boolean;
  ignoreNumericLiteralTypes?: boolean;
  ignoreEnums?: boolean;
  ignoreReadonlyClassProperties?: boolean;
  ignoreTypeIndexes?: boolean;
}

export type NoMagicNumbersRuleOptions = [Schema0?];
