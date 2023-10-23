<p>
  <a href="https://github.com/eslint-types/define-config-plugin-types/actions/workflows/ci.yml">
    <img alt="Build Status" src="https://github.com/eslint-types/define-config-plugin-types/actions/workflows/ci.yml/badge.svg?branch=main">
  </a>
  <a href="https://github.com/eslint-types/define-config-plugin-types/blob/main/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/github/license/eslint-types/define-config-plugin-types.svg">
  </a>
  <a href="https://prettier.io" target="_blank">
    <img alt="Code Style: Prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
  </a>
  <a href="https://www.paypal.com/donate?hosted_button_id=L7GY729FBKTZY" target="_blank">
    <img alt="Donate: PayPal" src="https://img.shields.io/badge/Donate-PayPal-blue.svg">
  </a>
</p>

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
