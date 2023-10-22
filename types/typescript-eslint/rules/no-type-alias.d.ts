export interface Schema0 {
  /**
   * Whether to allow direct one-to-one type aliases.
   */
  allowAliases?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases for callbacks.
   */
  allowCallbacks?: 'always' | 'never';
  /**
   * Whether to allow type aliases for conditional types.
   */
  allowConditionalTypes?: 'always' | 'never';
  /**
   * Whether to allow type aliases with constructors.
   */
  allowConstructors?: 'always' | 'never';
  /**
   * Whether to allow type aliases with object literal types.
   */
  allowLiterals?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases with mapped types.
   */
  allowMappedTypes?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases with tuple types.
   */
  allowTupleTypes?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases with generic types.
   */
  allowGenerics?: 'always' | 'never';
}

export type NoTypeAliasRuleOptions = [Schema0?];
