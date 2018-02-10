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

### Build Time Prerender(prerender) Vs. Server Side Rendering
This repo demonstrates the use of 2 different forms of Server Side Rendering.

**Prerender(prerender)** 
* Happens at build time
* Renders your application and replaces the dist index.html with a version rendered at the route `/`.

**Server-Side Rendering(universal)**
* Happens at runtime
* Uses `ngExpressEngine` to render you application on the fly at the requested url.

---

### Installation
* `npm install` or `yarn`

### Development (Client-side only rendering)
* run `npm run start` which will start `ng serve`

### Production (also for testing SSR/Pre-rendering locally)
**`npm run build:universal && npm run serve:universal`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`


## Angular Universal Starter
See [Angular Universal Starter](https://github.com/angular/universal-starter/blob/master/README.md) README for detailed info.


# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
