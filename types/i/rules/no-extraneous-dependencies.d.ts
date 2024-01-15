export interface Schema0 {
  devDependencies?: boolean | unknown[];
  optionalDependencies?: boolean | unknown[];
  peerDependencies?: boolean | unknown[];
  bundledDependencies?: boolean | unknown[];
  packageDir?: string | unknown[];
  includeInternal?: boolean;
  includeTypes?: boolean;
}

export type NoExtraneousDependenciesRuleOptions = [Schema0?];
