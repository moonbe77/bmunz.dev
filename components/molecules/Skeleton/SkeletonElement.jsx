import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaWindows } from 'react-icons/fa';
import styles from './skeleton.module.css';

const SkeletonElement = ({ type }) => {
  const [state, setState] = useState(true);
  const x = useSpring(0);

  const background = useTransform(x, [-10, 10], ['#7e7e7e', '#313131']);

  useEffect(() => {
    let direction = false;
    let value = -10;

    const changeValue = () => {
      value === 10 && (direction = true);
      value === -10 && (direction = false);

      if (direction) {
        value = (value % 360) - 1;
      } else {
        value = (value % 360) + 1;
      }
      setState(value);
    };

    const interval = setInterval(changeValue, 50);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    x.set(state);
  }, [state]);

  return (
    <motion.div
      style={{ background }}
      className={`${styles.skeleton} ${styles[type]}`}
    />
  );
};

export default SkeletonElement;
