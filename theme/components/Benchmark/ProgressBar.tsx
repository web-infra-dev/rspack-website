import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';

export function formatTime(time: number, totalTime: number) {
  if (totalTime < 1000) {
    return `${time}ms`;
  } else {
    return `${(time / 1000).toFixed(1)}s`;
  }
}

export function ProgressBar({ value, max }: { value: number; max: number }) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const TOTAL_TIME = value * 1000;
  const isMobile = window.innerWidth < 768;
  const progressBarWidth = isMobile ? 80 : 50;
  const variants = {
    initial: { width: 0 },
    animate: { width: '100%' },
  };
  useEffect(() => {
    const intervalTime = TOTAL_TIME < 1000 ? 10 : 100;
    const timer = setInterval(() => {
      if (elapsedTime < TOTAL_TIME) {
        setElapsedTime((prev) => prev + intervalTime);
      } else {
        clearInterval(timer);
      }
    }, intervalTime);
    return () => {
      clearInterval(timer);
    };
  }, [elapsedTime, setElapsedTime]);
  const formattedTime = formatTime(elapsedTime, TOTAL_TIME);
  return (
    <div
      className={`${styles['progress-bar-container']} flex justify-between items-center sm:pr-4`}
      style={{
        width: `${progressBarWidth}vw`,
      }}
    >
      <div
        className={`${styles['progress-bar-inner-container']} flex justify-between`}
        style={{
          width: `${(value / max) * 0.8 * progressBarWidth}vw`,
        }}
      >
        <motion.div
          className={styles['progress-bar']}
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: value, ease: 'linear' }}
        />
      </div>
      <div className={`${styles['font-mono']} text-sm sm:text-base`}>
        {formattedTime}
      </div>
    </div>
  );
}
