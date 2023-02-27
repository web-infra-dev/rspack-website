# 路线图

我们预期在未来支持如下一些功能，但是我们并不保证在下个版本支持下述的所有功能，也不保证下述的功能按照下述的顺序实现。

### 性能优化

我们仍然存在着很多的性能优化空间，我们将在未来和上游项目如 [swc](https://github.com/swc-project/swc) 和 [NAPI-RS](https://github.com/napi-rs/napi-rs) 一起持续的进行性能优化。

### 支持更多的社区插件 和 Loader

因为 webpack 包含了大量的 API，我们将根据社区的反馈支持一些最高频使用的 loader 和 plugin。

### Module Federation 支持

Module Federation 是一个广受使用的 webpack 特性，有着丰富的生态，我们将和 Module Federation 的作者 [Zack Jackson](https://github.com/ScriptedAlchemy) 一起合作开发该功能。

### Vue 和 Svelte 支持

Vue 和 Svelte 是两个非常流行的前端框架，其支持相比 React 的支持会更为复杂，依赖更多的 webpack 的内部 api，我们期望未来完成对两个框架的支持，支持完整的 Vue 和 Svelte 的生态。

### Lazy Compilation 支持

尽管 Rspack 目前有很好的性能，但是面对具有大量页面的项目，其性能仍然具有较大的提升空间，Lazy Compilation 是一个提升性能的良好手段，我们将在未来支持该功能。

### Persisten Cache 支持

Persisten Cache 能够大幅的优化项目的二次编译性能，即使 Rspack 目前在绝大部分项目里都能够达到不错的性能，但是在某些超大规模的项目的场景下，Persisten Cache 仍然能够带来很大的性能提升，我们将在未来计划支持该功能。
