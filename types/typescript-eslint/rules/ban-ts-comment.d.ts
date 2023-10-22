export type DirectiveConfigSchema =
  | boolean
  | 'allow-with-description'
  | {
      descriptionFormat?: string;
    };

export interface Schema0 {
  'ts-expect-error'?: DirectiveConfigSchema;
  'ts-ignore'?: DirectiveConfigSchema;
  'ts-nocheck'?: DirectiveConfigSchema;
  'ts-check'?: DirectiveConfigSchema;
  minimumDescriptionLength?: number;
}

export type BanTsCommentRuleOptions = [Schema0?];
