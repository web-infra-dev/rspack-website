import path from 'path';
import DocTools, { defineConfig } from '@modern-js/doc-tools';

function getI18nHelper(lang: 'zh' | 'en') {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';
  const getLink = (str: string) => `${prefix}${str}`;
  const getText = (zhText: string, enText: string) => (isZh ? zhText : enText);
  return { getText, getLink };
}

function getNavConfig(lang: 'zh' | 'en') {
  const { getText, getLink } = getI18nHelper(lang);
  return [
    {
      text: getText('指南', 'Guide'),
      link: getLink('/guide/introduction'),
    },
    {
      text: getText('配置', 'Config'),
      link: getLink('/config'),
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

function getSidebarConfig(lang: 'zh' | 'en') {
  const { getText, getLink } = getI18nHelper(lang);

  return {
    [getLink('/guide/')]: [
      {
        text: getText('介绍', 'Introduction'),
        link: getLink('/guide/introduction'),
      },
      {
        text: getText('快速上手', 'Quick Start'),
        link: getLink('/guide/getting-started'),
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
    ],
  };
}

export default defineConfig({
  doc: {
    root: path.join(__dirname, 'docs'),
    title: 'Rspack',
    description: 'A high-performance bundler based on Rust',
    logo: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/logo-2x-text-0104.png',
    icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/logo-1x-0104.png',
    lang: 'en',
    themeConfig: {
      footer: {
        message: '© 2023 Bytedance Inc. All Rights Reserved.',
      },
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
  },
  plugins: [DocTools()],
});
