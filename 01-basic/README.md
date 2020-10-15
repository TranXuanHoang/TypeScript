# Basics of TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=TypeScript)](https://www.typescriptlang.org/)
[![Webpack](https://img.shields.io/badge/Webpack-2b3a42?style=flat-square&logo=Webpack)](https://webpack.js.org/)

This project contains the basic development setup and foundational concepts when working with TypeScript. A simple web app allowing users to add and manage active and finished projects. The app's front-end logic is written completely with TypeScript.

<p align="center">
  <img src="./docs/AppSnapshot.gif" width="60%"/>
</p>

## 3rd-Party Packages

The project uses the following 3rd-party [Node.js](https://nodejs.org/) package

| Package | Type | Purpose |
|---------|------|---------|
| [lite-server](https://www.npmjs.com/package/lite-server) | `dev` | A lightweight development `Node.js` server that serves a web app, opens it in the browser, refreshes when html or javascript change, injects CSS changes and has a fallback page when a route is not found |
| [webpack](https://www.npmjs.com/package/webpack) | `dev` | Bundles JavaScript files for usage in a browser. Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... |
| [webpack-cli](https://www.npmjs.com/package/webpack-cli) | `dev` | CLI for webpack |
| [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) | `dev` | Serves a webpack app. Updates the browser on changes |
| [typescript](https://www.npmjs.com/package/typescript) | `dev` | A language for application scale JavaScript development |
| [ts-loader](https://www.npmjs.com/package/ts-loader) | `dev` | TypeScript loader for webpack |
| [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) | `dev` | A webpack plugin to remove/clean build directory(ies) |

## Source Code

Switch the source code to versions described below to view different implementations.

| Git Tag | Implementation |
|---------|----------------|
| [v1.0.0](https://github.com/TranXuanHoang/TypeScript/releases/tag/v1.0.0) | Basic setup for a web app using TypeScript to write its front-end logic |
| [v1.1.0](https://github.com/TranXuanHoang/TypeScript/releases/tag/v1.1.0) | Write a dashboard web app that allows users to create and manage projects |
| [v1.1.1](https://github.com/TranXuanHoang/TypeScript/releases/tag/v1.1.1) | Split source code of the dashboard web app into multiple files using [`TypeScript` `namespace`](https://www.typescriptlang.org/docs/handbook/namespaces.html) |
| [v1.1.2](https://github.com/TranXuanHoang/TypeScript/releases/tag/v1.1.2) | Split source code of the dashboard web app into multiple files using [`JavaScript` `modules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) |
| [v1.1.3](https://github.com/TranXuanHoang/TypeScript/releases/tag/v1.1.3) | Use [Webpack](https://webpack.js.org/) to compile and bundle code |

## Run App

* Install `Node.js` dependencies with `npm install`
* __Method 1 _(best fit with [v1.1.2](https://github.com/TranXuanHoang/TypeScript/releases/tag/v1.1.2))_:__ Compile code with `TypeScript` compiler and host the app with `Lite Server`
  * Check that the `<script>` tag in the header of the [index.html](index.html) has `src` refering to `app.js` as follows

    ```html
    <script type="module" src="dist/app.js" defer></script>
    ```

  * To compile `TypeScript` `.ts` files into `JavaScript` automatically whenever new changes are added to any of `TypeScript` files, run `tsc -w` or `tsc --watch`
  * Then, run `npm start:lite-server` that will spin up a `lite-server` hosting all resources including `.html`, `.css` and the compiled `.js` files in the `dist` directory
* __Method 2 _(best fit with [v1.1.3](https://github.com/TranXuanHoang/TypeScript/releases/tag/v1.1.3))_:__ Compile code with `Webpack` and host the app with `Webpack Dev Server`
  * Check that the `<script>` tag in the header of the [index.html](index.html) has `src` refering to `app.js` as follows

    ```html
    <script type="module" src="dist/bundle.js" defer></script>
    ```

  * Then, run `npm run watch:dev` that will automatically re-build `TypeScript` code whenever new changes are made
  * Run `npm run serve:dev` in a separate terminal/powershell to spin up a local webpack server

## Compile for Production

* Run `npm run build:prod` to compile and bundle all `TypeScript` code into a single `dist/bundle.js` file that is ready for production
* Run `npm run watch:prod` to _automatically re-compile and re-bundle_ all `TypeScript` code into a single production-ready `dist/bundle.js` file whenever the `TypeScript` code is modified
