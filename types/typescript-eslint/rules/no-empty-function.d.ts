export interface Schema0 {
  allow?: Array<
    | 'functions'
    | 'arrowFunctions'
    | 'generatorFunctions'
    | 'methods'
    | 'generatorMethods'
    | 'getters'
    | 'setters'
    | 'constructors'
    | 'private-constructors'
    | 'protected-constructors'
    | 'asyncFunctions'
    | 'asyncMethods'
    | 'decoratedFunctions'
    | 'overrideMethods'
  >;
}

export type NoEmptyFunctionRuleOptions = [Schema0?];
