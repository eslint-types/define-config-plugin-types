export type Schema0 =
  | {
      assertionStyle: 'never';
    }
  | {
      assertionStyle: 'as' | 'angle-bracket';
      objectLiteralTypeAssertions?: 'allow' | 'allow-as-parameter' | 'never';
    };

export type ConsistentTypeAssertionsRuleOptions = [Schema0?];
