# @eslint-types/\*

This repository is a monorepo that contains types for [eslint-define-config](https://github.com/eslint-types/eslint-define-config).

You can install them e.g. via `npm install @eslint-types/import` which will contain types for the `eslint-plugin-import` plugin.  
Then you can use them in your `.eslintrc.cjs` config like this:

```js
// @ts-check
const { defineConfig } = require('eslint-define-config');

/// <reference types="@eslint-types/import" />

module.exports = defineConfig({
  // ...
});
```
