/* eslint-disable react/prop-types */
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './loadingBar.module.scss';

interface LoadingBarProps {
  loading: boolean;
}

const LoadingBar = ({ loading }: LoadingBarProps) => {
  const loadingContainerRef = useRef(null);
  const [transitionX, setTransitionX] = useState(0);
  const [invert, setInvert] = useState(true);
  const gradientSize = 3000; // width of progress background

  const x = useMotionValue(0);

  useEffect(() => {
    const moveX = 2;
    const interval = setInterval(() => {
      if (loading) {
        if (invert) {
          setTransitionX((prev) => prev - moveX);
        } else {
          setTransitionX((prev) => prev + moveX);
        }
      }
    }, 1);

    return () => window.clearInterval(interval);
  }, [loading, invert]);

  useEffect(() => {
    const elementWidth = loadingContainerRef.current.offsetWidth;
    if (transitionX <= -(gradientSize - elementWidth)) {
      setInvert(false);
    }

    if (transitionX >= 0) {
      setInvert(true);
    }

    x.set(transitionX);
  }, [x, transitionX]);

  return (
    <div className={styles.loadingBar} ref={loadingContainerRef}>
      <motion.div
        transition={{ type: 'tween' }}
        className={styles.background}
        style={{ x }}
      />
    </div>
  );
};

export default LoadingBar;
