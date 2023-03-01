import { Tabs, Tab } from '@modern-js/doc-tools/theme';
import { NoSSR } from '@modern-js/doc-tools/runtime';
import { ProgressBar } from './ProgressBar';
import { MenuGroup } from '../MenuGroup/index';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useI18n } from '../../i18n';
import styles from './index.module.scss';

// 场景条件
// 冷启动/热更新
// 项目模块数量
// TODO: 增加不同场景条件下的 benchmark 数据
const performanceInfoList = [
  {
    name: 'rspack',
    // 单位为 s
    time: 1.3,
  },
  {
    name: 'webpack',
    // 单位为 s
    time: 12,
  },
];

export function Benchmark() {
  const t = useI18n();
  const SCENE = [t('coldStart'), t('hmr')];
  const LEVEL = [10, 100, 1000, 10000];
  // TODO: 针对不同的 SCENE(冷启动/热更新) 和 LEVEL(项目模块数量) 来展示不同的 benchmark 数据
  const [activeScene, setActiveScene] = useState(SCENE[0]);
  const [activeLevel, setActiveLevel] = useState(LEVEL[0]);
  const { ref, inView } = useInView();
  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? 'animate' : 'initial'}
      variants={variants}
      transition={{ duration: 1 }}
      className="relative flex flex-col justify-center py-10 mb-20 mt-15"
    >
      <div className="flex flex-center flex-col">
        <h2 className={`${styles.title} font-bold text-2xl sm:text-4xl`}>
          {t('benchmarkTitle')}
        </h2>
        <p className="mt-6 mx-6 text-center sm:text-lg text-gray-600 max-w-768px">
          {t('benchmarkDesc')}
        </p>
      </div>
      <div className="flex flex-col items-center my-4 z-1">
        {/* <h2 className="font-bold text-2xl mb-5">超快的编译速度!</h2> */}
        <Tabs values={SCENE}>
          {SCENE.map((scene) => (
            <Tab key={scene}>
              {performanceInfoList.map((info) => (
                <div
                  key={info.name}
                  className="flex flex-center justify-start m-4 flex-col sm:flex-row"
                >
                  {inView && (
                    <>
                      <p className="mr-2 mb-2 w-20 text-center text-gray-500 dark:text-light-500">
                        {info.name}
                      </p>
                      <NoSSR>
                        <ProgressBar
                          value={info.time}
                          max={Math.max(
                            ...performanceInfoList.map((info) => info.time)
                          )}
                        />
                      </NoSSR>
                    </>
                  )}
                </div>
              ))}
            </Tab>
          ))}
        </Tabs>
        <div className="flex flex-center">
          <p className="mr-2 font-medium">{t('moduleCount')}</p>
          <MenuGroup defaultLabel={activeLevel.toString()}>
            {LEVEL.map((level) => (
              <div
                key={level}
                className="text-sm py-1 px-3 cursor-pointer hover:bg-mute hover:text-brand rounded-md"
              >
                <span>{level}</span>
              </div>
            ))}
          </MenuGroup>
        </div>
      </div>
    </motion.div>
  );
}
