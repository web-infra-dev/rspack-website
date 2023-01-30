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

This site is built with [Modern.js Doc](https://github.com/modern-js-dev/modern.js), the document content can be written using markdown or mdx.

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
