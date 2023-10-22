export type Modifier =
  | 'readonly'
  | 'private'
  | 'protected'
  | 'public'
  | 'private readonly'
  | 'protected readonly'
  | 'public readonly';

export interface Schema0 {
  allow?: Modifier[];
  prefer?: 'class-property' | 'parameter-property';
}

export type ParameterPropertiesRuleOptions = [Schema0?];
