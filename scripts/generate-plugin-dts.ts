import { pascalCase } from 'change-case';
import type { ESLint, Rule } from 'eslint';
import type { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
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

  const packageJson: IPackageJson | false = await import(
    join(workspaceDirectory, 'package.json')
  ).catch(() => false);

  if (!packageJson) {
    console.warn(`No package.json found for ${workspace}`);
    continue;
  }

  const dep = Object.keys(packageJson.devDependencies ?? {}).find((dep) =>
    dep.includes(workspace),
  );

  if (!dep) {
    console.warn(`No matching dependency found for ${workspace}`);
    continue;
  }

  const pluginName = workspace;
  let pluginPrefix: string = pluginName;
  if (dep.startsWith('@')) {
    pluginPrefix = dep.split('/')[0]!;
  } else if (dep.startsWith('eslint-plugin-')) {
    pluginPrefix = dep.replace('eslint-plugin-', '');
  }

  const pluginDirectory = join(workspaceDirectory, 'node_modules', dep);
  const pluginPackageJson: IPackageJson = await import(
    join(pluginDirectory, 'package.json')
  );
  const pluginEntry: string | undefined =
    pluginPackageJson.main ?? pluginPackageJson.exports?.['.']?.default;

  if (!pluginEntry) {
    console.warn(`No entry found for ${pluginName}`);
    continue;
  }

  const importedPluginModule:
    | (ESLint.Plugin & { __esModule: true })
    | { __esModule: undefined; default: ESLint.Plugin } = await import(
    join(pluginDirectory, pluginEntry)
  );

  const pluginModule = importedPluginModule.__esModule
    ? importedPluginModule
    : importedPluginModule.default;

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

    const optionTypes = options.map((_, index) => `Schema${index}?`);
    const ruleOptionTypeValue = Array.isArray(meta.schema)
      ? `[${optionTypes.join(', ')}]`
      : meta.schema
      ? 'Schema0'
      : '[]';

    await writeFile(
      join(workspaceDirectory, 'rules', `${ruleName}.d.ts`),
      `${options.join('\n')}
export type ${pascalCase(ruleName)}RuleOptions = ${ruleOptionTypeValue};
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
    "${pluginPrefix}/${ruleName}": ${pascalCase(ruleName)}RuleOptions;`);
  }

  const hasPluginParsers = await stat(join(workspaceDirectory, 'parsers.d.ts'))
    .then(() => true)
    .catch(() => false);

  const hasPluginParserOptions = await stat(
    join(workspaceDirectory, 'parser-options.d.ts'),
  )
    .then(() => true)
    .catch(() => false);

  const hasPluginSettings = await stat(
    join(workspaceDirectory, 'settings.d.ts'),
  )
    .then(() => true)
    .catch(() => false);

  await writeFile(
    join(workspaceDirectory, 'index.d.ts'),
    `${ruleOptionImports.join('\n')}
${hasPluginParsers ? `import type { Parsers } "./parsers";` : ''}${
      hasPluginParserOptions
        ? `import type { ParserOptions } "./parser-options";`
        : ''
    }${hasPluginSettings ? `import type { Settings } "./settings";` : ''}

declare module "eslint-define-config" {
  export interface CustomExtends {
    ${pluginConfigs
      .map((config) => `"plugin:${pluginPrefix}/${config}": void;`)
      .join('\n')}
  }

  export interface CustomPlugins {
    "${pluginPrefix}": void;
  }

  export interface CustomRuleOptions {
    ${ruleDeclarations.join('\n')}
  }

  ${
    hasPluginParsers ? 'export interface CustomParsers extends Parsers {};' : ''
  }

  ${
    hasPluginParserOptions
      ? 'export interface CustomParserOptions extends ParserOptions {};'
      : ''
  }

  ${
    hasPluginSettings
      ? 'export interface CustomSettings extends Settings {};'
      : ''
  }
}
`,
    {
      encoding: 'utf8',
      flag: 'w',
    },
  );
}
