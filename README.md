<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1016365/10639063/138338bc-7806-11e5-8057-d34c75f3cafc.png" alt="Universal Angular" height="320"/>
</p>

# MEAnU Starter [![Universal Angular](https://img.shields.io/badge/universal-angular5-brightgreen.svg?style=flat)](https://github.com/angular/universal)

Angular Universal starter with MongoDB and server APIs

This repo has started from an [Angular Universal Starter](https://github.com/angular/universal-starter) project.


## Getting Started

> This demo is built following the [Angular-CLI Wiki guide](https://github.com/angular/angular-cli/wiki/stories-universal-rendering)

We're utilizing packages from the [Angular Universal @nguniversal](https://github.com/angular/universal) repo, such as [ng-module-map-ngfactory-loader](https://github.com/angular/universal/tree/master/modules/module-map-ngfactory-loader) to enable Lazy Loading.

---

### Installation

* `npm install` or `yarn`

### Development (Client-side only rendering)

* run `npm run start` which will start `ng serve`

### Development (Client and Server watch enabled)

* client watch enabled: `npm run build:dev` (served on http://localhost:4200)
* server watch enabled: `npm run build:server:dev`
* start server: `npm run serve:universal` (served on http://localhost:4000)

Go to client url to see client changes in realtime. Server needs to be restarded manually when server code changes. Also, be aware that the server has been configured to allow client http://localhost:4200 origin.

### Production (also for testing universal locally)

**`npm run build:universal && npm run serve:universal`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

## Angular Universal Starter

See [Angular Universal Starter](https://github.com/angular/universal-starter/blob/master/README.md) README for detailed info.

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
