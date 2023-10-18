import { pascalCase } from 'change-case';
import type { ESLint, Rule } from 'eslint';
import type { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import type { IPackageJson } from 'package-json-type';

const __dirname: string = fileURLToPath(new URL('.', import.meta.url));

const workspaceRootDirectory = join(__dirname, '..', 'types');

const workspaces = await readdir(workspaceRootDirectory, {
  recursive: false,
});

for (const workspace of workspaces) {
  const workspaceDirectory = join(workspaceRootDirectory, workspace);

  const packageJson: IPackageJson = await import(
    join(workspaceDirectory, 'package.json')
  );
  const dep = Object.keys(packageJson.devDependencies ?? {}).find((dep) =>
    dep.includes(workspace),
  );

  if (!dep) {
    console.warn(`No matching dependency found for ${workspace}`);
    continue;
  }

  const pluginName = workspace;

  const pluginDirectory = join(workspaceDirectory, 'node_modules', dep);
  const pluginPackageJson: IPackageJson = await import(
    join(pluginDirectory, 'package.json')
  );
  const pluginEntry = pluginPackageJson.main;

  if (!pluginEntry) {
    console.warn(`No entry found for ${pluginName}`);
    continue;
  }

  const pluginModule: ESLint.Plugin = await import(
    join(pluginDirectory, pluginEntry)
  );

  const pluginConfigs = Object.keys(pluginModule.configs ?? {});

  const pluginRules = pluginModule.rules;
  await mkdir(join(workspaceDirectory, 'rules'), { recursive: true });

  const ruleOptionImports: string[] = [];
  const ruleDeclarations: string[] = [];

  for (const [ruleName, ruleDefinition] of Object.entries(pluginRules ?? {})) {
    // TODO @Shinigami92 2023-10-18: make this more TS safe
    const meta = (ruleDefinition as Rule.RuleModule).meta!;

    let schemas = (meta.schema as JSONSchema4[]) ?? [];
    if (!Array.isArray(schemas)) {
      schemas = [schemas];
    }

    const options = await Promise.all(
      schemas.map(async (schema, index) => {
        schema = JSON.parse(
          JSON.stringify(schema).replaceAll('#/items/0/$defs/', '#/$defs/'),
        );

        return await compile(schema, `Schema${index}`, {
          bannerComment: '',
        });
      }),
    );

    await writeFile(
      join(workspaceDirectory, 'rules', `${ruleName}.d.ts`),
      `${options.join('\n')}
export type ${pascalCase(ruleName)}RuleOptions = [${options
        .map((_, index) => `Schema${index}?`)
        .join(', ')}]
`,
      {
        encoding: 'utf8',
        flag: 'w',
      },
    );

    ruleOptionImports.push(
      `import type { ${pascalCase(
        ruleName,
      )}RuleOptions } from "./rules/${ruleName}"`,
    );

    const documentation: Rule.RuleMetaData['docs'] = meta.docs ?? {};

    ruleDeclarations.push(`/**
     * ${documentation.description}
     *
     * @see [${ruleName}](${documentation.url})
     */
    "${pluginName}/${ruleName}": ${pascalCase(ruleName)}RuleOptions;`);
  }

  await writeFile(
    join(workspaceDirectory, 'index.d.ts'),
    `${ruleOptionImports.join('\n')}

declare module "eslint-define-config" {
  export interface CustomExtends {
    ${pluginConfigs
      .map((config) => `"plugin:${pluginName}/${config}": void;`)
      .join('\n')}
  }

  export interface CustomPlugins {
    ${pluginName}: void;
  }

  export interface CustomRuleOptions {
    ${ruleDeclarations.join('\n')}
  }
}
`,
    {
      encoding: 'utf8',
      flag: 'w',
    },
  );
}
