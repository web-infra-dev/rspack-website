# Announcing Rspack 0.2

Almost three months since the release of Rspack 0.1, we have received much attention and feedback from the community, for which we are grateful. In version 0.2, we have added many features, such as realContentHash, DataURI, and support for ESM format, etc., strengthened compatibility with Webpack, and optimized many details. In addition, thanks to good compatibility with the Webpack API, we have also further achieved compatibility with the surrounding ecosystem, such as completing tests for compatibility with vue-loader versions 17 (corresponding to Vue3) and 15 (corresponding to Vue2). Now you can try using Rspack in Vue2/3 projects. We look forward to you experiencing these new improvements in version 0.2, and welcome your feedback at any time.

## Main feature updates

### Loader

Version 0.2 has completed compatibility with most of the loader APIs, including inline match resource, pitching loader, inline loader, etc. More APIs have further improved compatibility with Webpack loaders, details of which can be found in the following Webpack compatibility updates. For more information, please refer to [Loader API](/api/loader-api.html).

### Plugin Hooks

Some new hooks for plugins have been added.

Compiler hooks:

1. [beforeCompile](api/plugin-api.html#beforecompile)
2. [afterCompile](api/plugin-api.html#aftercompile)

Compilation hooks:

1. [optimizeModules](api/plugin-api.html#optimizemodules)
2. [optimizeChunkModule](api/plugin-api.html#optimizechunkmodules)
3. [finishModules](api/plugin-api.html#finishmodules)
4. [chunkAsset](api/plugin-api.html#chunkasset)

NormalModuleFactory hooks:

1. [beforeResolve](api/plugin-api.html#beforeresolve)
2. [afterResolve](api/plugin-api.html#afterresolve)
3. [ResolveForScheme](api/plugin-api.html#resolveforscheme)

ContextModuleFactory hooks:

1. [beforeResolve](api/plugin-api.html#beforeresolve)

### realContentHash

We have implemented `optimization.realContentHash`, which calculates the Hash based on the final product's file content, making the generated Hash more stable and better utilizing the cache. In version 0.2, this feature will be enabled by default for production environment builds.

### ESM/System format

In the new version, System/ESM products can be generated, and the configuration for outputting ESM products is as follows:

```js title="rspack.config.js"
module.exports = {
  // …
  experiments: {
    outputModule: true,
  },
  output: {
    library: {
      // do not specify a `name` here
      type: 'module',
    },
  },
};
```

### New `SplitChunksPlugin` implementation

We have restructured the existing implementation of `SplitChunksPlugin` in Rspack, making the behavior of `SplitChunksPlugin` more predictable and reducing the cost of troubleshooting related issues.

After the restructuring, we are confident to implement more new features on `SplitChunksPlugin`. We are pleased to announce that in version 0.2, `SplitChunksPlugin` supports the following configuration items:

- `splitChunks.maxSize`
- `splitChunks.maxAsyncSize`
- `splitChunks.maxInitialSize`
- `splitChunks.maxAsyncRequests`
- `splitChunks.maxInitialRequests`

In version 0.2, we will use the new `SplitChunksPlugin` by default. If you encounter problems, please provide feedback promptly, and we will fix them as soon as possible. You can switch back to the old implementation

with `experiments.newSplitChunks: false`, but we strongly recommend using the new version. In version 0.3, we will remove the old implementation.

### DataURI support

We have implemented support for DataURI. Now you can write the following code to implement virtual modules:

```js
import x from 'data:text/javascript,export default 42';
```

In addition, we have supported `mimetype` and `scheme` as two types of module rule conditions. For example, you can make resources with `scheme` as `'data'` no longer treated as inline processing, but as separate resource files through the following method:

```js title="rspack.config.js"
module.exports = {
  module: {
    rules: [
      {
        scheme: 'data',
        type: 'asset/resource',
      },
    ],
  },
};
```

### Incremental writing supported in Emit Assets

In the new version, the output of the final product will be incremental, which can significantly reduce I/O operations during HMR builds. For 25000 modules, it is estimated that the emit assets time can be reduced from 500ms to 5ms. Here's a comparison chart with Webpack showing the O(1) improvement.

## Breaking Changes

- Alignment of Filename Generation Logic

  In version 0.1.12, we further aligned the file name generation logic with webpack, and refactored the implementation of file name generation. However, the [ext] in `output.filename`, `output.chunkFilename`, `output.cssFilename`, and `output.cssChunkFilename` will no longer be replaced. This behavior is now consistent with webpack but is a breaking change for versions of Rspack prior to 0.1.12. If you used [ext] in the above 4 filename configurations, you need to change it to the corresponding `.js` or `.css`, for example:

  ```diff title="rspack.config.js"
  module.exports = {
    output: {
  -    filename: "[name][ext]",
  +    filename: "[name].js",

  -    chunkFilename: "async/[name][ext]",
  +    chunkFilename: "async/[name].js",

  -    cssFilename: "[name][ext]",
  +    cssFilename: "[name].css",

  -    cssChunkFilename: "async/[name][ext]",
  +    cssChunkFilename: "async/[name].css",
    }
  }
  ```

  Details: https://github.com/web-infra-dev/rspack/issues/3270

- Enabled realContentHash by default in production

  Details: https://github.com/web-infra-dev/rspack/pull/3338

- Modified the Extensions of Resolve

  Details: https://github.com/web-infra-dev/rspack/pull/3242

- Modified the Export Method of @rspack/dev-middleware and @rspack/html-plugin, and Removed `getRspackMemoryAssets` Exported by @rspack/dev-middleware

  Details: https://github.com/web-infra-dev/rspack/pull/3358

## Webpack Compatibility Updates

As we support more webpack APIs, we are also compatible with more community plugins and loaders. We have adapted some plugins and loaders that have a high demand in the community.

### fork-ts-checker-webpack-plugin

Type checking in TypeScript in Rspack is a widespread demand. Rspack has fully adapted [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin). You can use this plugin to perform TypeScript type checking during compilation. However, as TypeScript's type checking is usually very time-consuming, this makes the time required for type checking on larger projects may far exceed the build time of Rspack itself. In dev mode, this plugin will not block the build, but in build mode, this plugin will block the build. Please choose whether to enable this plugin based on your actual needs.

### license-webpack-plugin

A widely reported community demand is support for extracting licenses from code. Now, Rspack can achieve the requirement of extracting licenses from the code through [license-webpack-plugin](https://github.com/xz64/license-webpack-plugin).

### style-loader & css-loader

Although Rspack supports and enables the `experiments.css` feature of webpack by default, there are still many communities that strongly depend on [style-loader](https://github.com/webpack-contrib/style-loader) & [css-loader](https://github.com/webpack-contrib/css-loader). We have completed support for style-loader and css-loader in 0.2.0, which also allows us to better adapt to frameworks such as Svelte and Vue.

### node-loader

When using Rspack to package Node applications like Nestjs, a common requirement is to package libraries containing addons. These libraries' native dependencies cannot be directly packaged into js, so they need special treatment. Rspack has adapted [node-loader](https://github.com/webpack-contrib/node-loader), so you can now use Rspack to build node applications.

Rspack's adaptation to webpack's plugins and loaders is not only this. We have tracked the adapted plugins and loaders in [loader-compat](https://github.com/web-infra-dev/rspack/tree/main/examples/loader-compat) and [plugin-compat](https://github.com/web-infra-dev/rspack/tree/main/examples/plugin-compat). If you find that the community plugin and loader you are using are also compatible, welcome to submit it to us.

## Framework Ecosystem Updates

### Modern.js Framework

Thanks to the close cooperation and parallel iteration of the Modern.js framework and Rspack, **Modern.js Rspack mode has covered 85% of the framework capabilities**, supporting SSR, BFF, micro front-end scenarios, and aligning with TypeScript type checking, code compatibility detection and other functions. In ByteDance, more than 80 projects are using the Modern.js Rspack mode. Some of the projects have been launched to the production environment, achieving about a 10-fold improvement in build performance.

### Modern.js Doc

In addition to the Modern.js framework, the document site development solution under the Modern.js system - Modern.js Doc - has also switched the build tool from webpack to Rspack, and rewritten the MDX compilation process based on Rust. Compared with the early version using webpack, the overall brought more than 10 times the build performance improvement. For example, the startup and construction time of the Modern.js official website documents has been reduced from 30s to within 2s. In the future, we plan to rename Modern.js Doc to Rspress, serve as the official documentation site solution of Rspack, and maintain it through a separate repository.

> Welcome to visit the [Modern.js code repository](https://github.com/web-infra-dev/modern.js) and experience the above content.

### Vue

Rspack 0.2 has completed the compatibility with vue-loader. You can refer to [example-vue3](https://github.com/web-infra-dev/rspack/tree/main/examples/vue) or [example-vue2](https://github.com/web-infra-dev/rspack/tree/main/examples/vue2) to complete the corresponding configuration. At the same time, we are also promoting further support for the Vue framework, so stay tuned.

### Svelte

Thanks to Rspack's excellent support for the Loader API and the excellent design of [svelte-loader](https://github.com/sveltejs/svelte-loader), Rspack has fully adapted [svelte-loader](https://github.com/sveltejs/svelte-loader). Therefore, you can directly use [svelte-loader](https://github.com/sveltejs/svelte-loader) in Rspack for svelte application development. You can refer to [example-svelte](https://github.com/web-infra-dev/rspack/tree/main/examples/svelte) to complete the svelte-loader related configuration.

### Storybook

With the help of the Storybook team, Rspack has completed support for the Storybook React version. You can follow the [migrate Storybook](https://www.rspack.dev/guide/migrate-storybook.html) method to migrate from the webpack version to the Rspack version. In actual projects, tests have shown that the Rspack version is 5-10 times faster than the Webpack version when the docgen feature is not turned on. When docgen is turned on, since Rspack still relies on babel to handle docgen, the performance is affected, but there is still a 2-3 times improvement.

### Angular

With the help of the Valor team, Rspack has completed preliminary support for Angular. You can use Rspack to

build Angular applications, but the support for dev and HMR has not yet been fully adapted. We will continue to follow up on Angular support in version 0.2.x.

### NestJS

With the help of Rosa, Nx, and Valor, Rspack has completed the compilation support for NestJS. You can use Rspack to package NestJS applications, and in actual projects, tests have shown that Rspack has a 5-10 times build performance improvement compared to the Webpack version.

## Benchmark

Added a benchmark comparison with esbuild. Please refer to the following link for more details: https://github.com/web-infra-dev/performance-compare

## Dev guide

The Rspack team deeply values the valuable contributions made by the open source community and actively fosters collaboration. We are committed to maintaining an open approach, striving to engage and involve the community at every step.
This is why we are currently crafting a comprehensive development guide that equips contributors with all the essential materials required to facilitate the development of Rspack.
The current version of the guide contains all the necessary materials for building, testing, debugging, and profiling Rspack. Additionally, it includes contribution procedures, such as creating a minimal reproducible example.
In the future, the guide will offer an insightful overview of Rspack's architecture, enabling contributors to gain a profound understanding of the project's intricate inner workings.

## Test infrastructures

In order to ship with confidence, we are currently:

- Building and testing a list of examples in the Rspack repository (currently 38 examples)
- Porting all webpack tests from the webpack repository
- Running all tests on Node 14, 16 and 18
- Maintaining a separate ecosystem-ci repository for integration tests

## Nightly Release

In order to expedite iteration, Rspack is released daily with the "@nightly" tag to npm.

## Acknowledgements

With the release of Rspack 0.2, we wholeheartedly thank all the contributors who have put effort into this version.

Special thanks to:

- [@TheLarkInn](https://github.com/TheLarkInn) and [@alexander-akait](https://github.com/alexander-akait), for answering and resolving many of Rspack team's questions about Webpack.
- [@zackarychapple](https://github.com/zackarychapple) and [@edusperoni](https://github.com/edusperoni), for assisting Rspack with basic support for Angular.
- [@suxin2017](https://github.com/suxin2017), for supporting System.js format and optional-dependency functionality in Rspack, as well as contributing a lot in terms of Windows compatibility.
- [@faga295](https://github.com/faga295), for supporting the decompression code comment feature and rspack preview feature in Rspack.
- [@lippzhang](https://github.com/lippzhang), for making numerous contributions in aligning Rspack's behavior with Webpack.
- [@HerringtonDarkholme](https://github.com/HerringtonDarkholme), for allowing Rspack to use rspack.config.ts as a configuration file.
- [@dhruvkelawala](https://github.com/dhruvkelawala), for implementing the builtins.provide feature in Rspack.
- [@magic-akari](https://github.com/magic-akari), for supporting the new URL("./foo", import.meta.url) syntax in Rspack.
- [@tuchg](https://github.com/tuchg), for supporting the packing of .wasm files in Rspack.

We also want to thank all the users of Rspack, for showing trust in such a young open-source project. Your valuable feedback plays a key role in our project improvements and optimizations. Your support and trust is our motivation to move forward.

Finally, let us collectively celebrate the release of Rspack 0.2 and look forward to future developments and more opportunities for collaboration. Thanks again to all friends who support and pay attention to Rspack!
