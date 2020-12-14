# agmaio-script-lib-template
Template repository for [agmascripts-core](https://github.com/agmascripts/core)

## Installation
[Browserify](http://browserify.org/) needs to be globally installed to build the script.
```bash
$ npm i -g browserify
```
```bash
$ npm install
```

## Usage

| Command            | Description                                                 |
| :----------------- | :---------------------------------------------------------- |
| npm run build      | Build script, bundle found in `dist/bundle.js`              |
| npm run build:tiny | Build script but minified, bundle found in `dist/bundle.js` |

## Deploy on TamperMonkey
```txt
// ==UserScript==
// @name         AgmaScripts Examples
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  example for @agmascripts/core
// @author       CodingWithNuke
// @match        https://agma.io/
// @grant        none
// ==/UserScript==

// ----- Script code here -----
```