import { readdir, writeFile } from "node:fs/promises";
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

  const pluginDir = join(workspaceDir, "node_modules", dep);
  const pluginPkgJson = await import(join(pluginDir, "package.json"));
  const pluginEntry = pluginPkgJson.main;
  const pluginModule = await import(join(pluginDir, pluginEntry));
  console.log(pluginModule);

  await writeFile(
    join(workspaceDir, "index.d.ts"),
    `declare module "eslint-define-config" {
  export interface CustomExtends {
    "plugin:deprecation/recommended": void;
  }

  export interface CustomPlugins {
    deprecation: void;
  }

  export interface CustomRuleOptions {
    /**
     * Do not use deprecated APIs.
     *
     * @see [deprecation](https://github.com/gund/eslint-plugin-deprecation)
     */
    "deprecation/deprecation": [];
  }
}
`,
    {
      encoding: "utf-8",
      flag: "w",
    }
  );
}
