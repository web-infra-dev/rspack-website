# Rspack Documentation

📄 Documentation for Rspack.

## Translation

Currently Rspack provides documentation in English and Chinese. If you can use Chinese, please update both documents at the same time. Otherwise, just update the English documentation.

```bash
root
└─ docs
   ├─ en     # English Document
   └─ zh     # Chinese Document
```

## Contributing

This website is built with [Modern.js Doc](https://modernjs.dev/doc-tools), the document content can be written using markdown or mdx syntax. You can refer to the [Modern.js Doc Website](https://modernjs.dev/doc-tools) for detailed usage.

The source code of Modern.js Doc can be found in [this folder](https://github.com/web-infra-dev/modern.js/tree/main/packages/solutions/doc-tools).

If you have any problems using the Modern.js Doc, please create a new issue at [Modern.js Issues](https://github.com/web-infra-dev/modern.js/issues).

### Install pnpm

```bash
# enable pnpm with corepack
# only available on node >= `v14.19.0`
corepack enable

# or install pnpm 7 directly
npm install -g pnpm@7
```

### Local Development

```bash
pnpm install
pnpm run dev
```

### Production Build

```bash
pnpm run build
```
