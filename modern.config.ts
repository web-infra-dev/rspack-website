import path from 'path';
import DocTools, { defineConfig, NavItem, Sidebar } from '@modern-js/doc-tools';

const isProd = process.env.NODE_ENV === 'production';

function getI18nHelper(lang: 'zh' | 'en') {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';
  const getLink = (str: string) => `${prefix}${str}`;
  const getText = (zhText: string, enText: string) => (isZh ? zhText : enText);
  return { getText, getLink };
}

function getNavConfig(lang: 'zh' | 'en'): NavItem[] {
  const { getText, getLink } = getI18nHelper(lang);
  return [
    {
      text: getText('指南', 'Guide'),
      link: getLink('/guide/introduction'),
      activeMatch: '/guide/',
    },
    {
      text: getText('配置', 'Config'),
      link: getLink('/config'),
      activeMatch: '/config',
    },
    {
      text: getText('生态', 'Ecosystem'),
      items: [
        {
          text: 'Modern.js',
          link: 'https://modernjs.dev/',
        },
        {
          text: 'Modern.js Builder',
          link: 'http://modernjs.dev/builder/',
        },
      ],
    },
  ];
}

function getSidebarConfig(lang: 'zh' | 'en'): Sidebar {
  const { getText, getLink } = getI18nHelper(lang);

  return {
    [getLink('/guide/')]: [
      {
        collapsible: false,
        text: getText('开始', 'Getting Started'),
        items: [
          getLink('/guide/introduction'),
          getLink('/guide/quick-start'),
          getLink('/guide/glossary'),
        ],
      },
      {
        collapsible: false,
        text: getText('特性', 'Features'),
        items: [
          getLink('/guide/language-support'),
          getLink('/guide/asset-module'),
          getLink('/guide/dev-server'),
          getLink('/guide/tailwindcss'),
        ],
      },
      {
        collapsible: false,
        text: getText('优化', 'Optimization'),
        items: [
          getLink('/guide/optimization'),
          getLink('/guide/code-splitting'),
        ],
      },
      {
        collapsible: false,
        text: getText('框架支持', 'Framework Support'),
        items: [getLink('/guide/react'), getLink('/guide/solid')],
      },
      {
        collapsible: false,
        text: getText('迁移', 'Migration'),
        items: [getLink('/guide/migrate-from-webpack')],
      },
    ],

    [getLink('/config/')]: [
      {
        text: getText('配置', 'Config'),
        link: getLink('/config'),
      },
      {
        text: getText('Entry 入口', 'Entry'),
        link: getLink('/config/entry'),
      },
      {
        text: getText('Context 基础目录', 'Context'),
        link: getLink('/config/context'),
      },
      {
        text: getText('Mode 模式', 'Mode'),
        link: getLink('/config/mode'),
      },
      {
        text: getText('Output 输出', 'Output'),
        link: getLink('/config/output'),
      },
      {
        text: getText('Module 模块', 'Module'),
        link: getLink('/config/module'),
      },
      {
        text: getText('Target 目标环境与兼容性', 'Target'),
        link: getLink('/config/target'),
      },
      {
        text: getText('Resolve 模块解析', 'Resolve'),
        link: getLink('/config/resolve'),
      },
    ],
  };
}

export default defineConfig({
  doc: {
    root: path.join(__dirname, 'docs'),
    title: 'Rspack',
    description: 'A high-performance bundler based on Rust',
    // TODO logo
    // logo: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/logo-2x-text-0104.png',
    icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/logo-1x-0104.png',
    lang: 'en',
    themeConfig: {
      footer: {
        message: '© 2023 Bytedance Inc. All Rights Reserved.',
      },
      socialLinks: [
        {
          icon: 'github',
          mode: 'link',
          content: 'https://github.com/modern-js-dev/rspack',
        },
      ],
      locales: [
        {
          lang: 'en',
          title: 'Rspack',
          description: 'A high-performance bundler based on Rust',
          nav: getNavConfig('en'),
          sidebar: getSidebarConfig('en'),
          label: 'English',
        },
        {
          lang: 'zh',
          title: 'Rspack',
          description: '基于 Rust 的高性能模块打包工具',
          nav: getNavConfig('zh'),
          sidebar: getSidebarConfig('zh'),
          label: '简体中文',
        },
      ],
    },
    builderConfig: {
      dev: {
        startUrl: true,
      },
    },
  },
  plugins: [DocTools()],
});
