/* eslint-disable react/prop-types */
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './loadingBar.module.scss';

interface LoadingBarProps {
  loading: boolean;
}

const LoadingBar = ({ loading }: LoadingBarProps) => {
  const loadingContainerRef = useRef(null);
  // const [loading, setLoading] = useState(false);
  const [transitionX, setTransitionX] = useState(0);
  const [invert, setInvert] = useState(true);
  const gradientSize = 4000; // width of background element

  const x = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loading) {
        if (invert) {
          setTransitionX((prev) => prev - 100);
        } else {
          setTransitionX((prev) => prev + 100);
        }
      }
    }, 100);

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
      <motion.div className={styles.background} style={{ x }} />
    </div>
  );
};

export default LoadingBar;
