# Basics of TypeScript

This project contains the basic development setup and foundational concepts when working with TypeScript. A simple web app allowing users to add and manage active and finished projects. The app's front-end logic is written completely with TypeScript.

<p align="center">
  <img src="./docs/AppSnapshot.gif" width="60%"/>
</p>

## 3rd-Party Packages

The project uses the following 3rd-party [Node.js](https://nodejs.org/) package

| Package | Type | Purpose |
|---------|------|---------|
| [lite-server](https://www.npmjs.com/package/lite-server) | `dev` | A lightweight development `Node.js` server that serves a web app, opens it in the browser, refreshes when html or javascript change, injects CSS changes and has a fallback page when a route is not found |

## Source Code

Switch the source code to versions described below to view different implementations.

| Git Tag | Implementation |
|---------|----------------|
| [v1.0.0](https://github.com/TranXuanHoang/TypeScript/releases/tag/v1.0.0) | Basic setup for a web app using TypeScript to write its front-end logic |
| [v1.1.0](https://github.com/TranXuanHoang/TypeScript/releases/tag/v1.1.0) | Write a dashboard web app that allows users to create and manage projects |
| [v1.1.1](https://github.com/TranXuanHoang/TypeScript/releases/tag/v1.1.1) | Split source code of the dashboard web app into multiple files using [`TypeScript` `namespace`](https://www.typescriptlang.org/docs/handbook/namespaces.html) |
| [v1.1.2](https://github.com/TranXuanHoang/TypeScript/releases/tag/v1.1.2) | Split source code of the dashboard web app into multiple files using [`JavaScript` `modules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) |

## Run App

* Install `Node.js` dependencies with `npm install`
* To compile `TypeScript` `.ts` files into `JavaScript` automatically whenever new changes are added to any of `TypeScript` files, run `tsc -w` or `tsc --watch`
* Then, run `npm start` that will spin up a `lite-server` hosting all resources including `.html`, `.css` and the compiled `.js` files in the `dist` directory
