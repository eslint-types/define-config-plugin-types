export type Schema0 =
  | []
  | ['allow-primitive-modules']
  | [
      {
        allowPrimitiveModules?: boolean;
        allowRequire?: boolean;
        allowConditionalRequire?: boolean;
      },
    ];

export type NoCommonjsRuleOptions = Schema0;
