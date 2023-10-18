import { pascalCase } from "change-case";
import type { JSONSchema4 } from "json-schema";
import { compile } from "json-schema-to-typescript";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { URL, fileURLToPath } from "node:url";

const __dirname: string = fileURLToPath(new URL(".", import.meta.url));

const workspaceRootDir = join(__dirname, "..", "types");

const workspaces = await readdir(workspaceRootDir, {
  recursive: false,
});

for (const workspace of workspaces) {
  const workspaceDir = join(workspaceRootDir, workspace);

  const pkgJson = await import(join(workspaceDir, "package.json"));
  const dep = Object.keys(pkgJson.devDependencies).find((dep) =>
    dep.includes(workspace)
  );

  if (!dep) {
    continue;
  }

  const pluginName = workspace;

  const pluginDir = join(workspaceDir, "node_modules", dep);
  const pluginPkgJson = await import(join(pluginDir, "package.json"));
  const pluginEntry = pluginPkgJson.main;
  const pluginModule = await import(join(pluginDir, pluginEntry));

  const pluginConfigs = Object.keys(pluginModule.configs);

  const pluginRules = pluginModule.rules;
  await mkdir(join(workspaceDir, "rules"), { recursive: true });

  const ruleOptionImports: string[] = [];
  const ruleDeclarations: string[] = [];

  for (const [ruleName, ruleDefinition] of Object.entries(pluginRules)) {
    const meta = ruleDefinition.meta;

    let schemas = (meta.schema as JSONSchema4[]) ?? [];
    if (!Array.isArray(schemas)) {
      schemas = [schemas];
    }

    const options = await Promise.all(
      schemas.map(async (schema, index) => {
        schema = JSON.parse(
          JSON.stringify(schema).replace(/\#\/items\/0\/\$defs\//g, "#/$defs/")
        );

        return await compile(schema, `Schema${index}`, {
          bannerComment: "",
        });
      })
    );

    await writeFile(
      join(workspaceDir, "rules", `${ruleName}.d.ts`),
      `${options.join("\n")}
export type ${pascalCase(ruleName)}RuleOptions = [${options
        .map((_, index) => `Schema${index}?`)
        .join(", ")}]
`,
      {
        encoding: "utf-8",
        flag: "w",
      }
    );

    ruleOptionImports.push(
      `import type { ${pascalCase(
        ruleName
      )}RuleOptions } from "./rules/${ruleName}"`
    );

    ruleDeclarations.push(`/**
     * ${meta.docs.description}
     *
     * @see [${ruleName}](${meta.docs.url})
     */
    "${pluginName}/${ruleName}": ${pascalCase(ruleName)}RuleOptions;`);
  }

  await writeFile(
    join(workspaceDir, "index.d.ts"),
    `${ruleOptionImports.join("\n")}

declare module "eslint-define-config" {
  export interface CustomExtends {
    ${pluginConfigs
      .map((config) => `"plugin:${pluginName}/${config}": void;`)
      .join("\n")}
  }

  export interface CustomPlugins {
    ${pluginName}: void;
  }

  export interface CustomRuleOptions {
    ${ruleDeclarations.join("\n")}
  }
}
`,
    {
      encoding: "utf-8",
      flag: "w",
    }
  );
}
