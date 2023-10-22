export interface Schema0 {
  prefer?: 'type-imports' | 'no-type-imports';
  disallowTypeAnnotations?: boolean;
  fixStyle?: 'separate-type-imports' | 'inline-type-imports';
}

export type ConsistentTypeImportsRuleOptions = [Schema0?];
