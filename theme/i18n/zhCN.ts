import { EN_US } from './enUS';

export const ZH_CN: Record<keyof typeof EN_US, string> = {
  coldStart: '冷启动',
  hmr: '热更新',
  moduleCount: '模块数量',
  guide: '指南',
  quickStart: '快速开始',
  features: '核心特性',
  compatibility: '对 webpack 的兼容性',
  migration: '迁移指南',
  cli: 'CLI 接口',
  ecosystem: '生态',
  community: '社区',
  benchmarkTitle: '极快的构建速度',
  benchmarkDesc:
    '基于 Rust 及高度并行、增量编译的架构，构建速度非常快，带给你极致的开发体验。',
};
