import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaWindows } from 'react-icons/fa';
import styles from './skeleton.module.css';

const SkeletonElement = ({ type }) => {
  const [state, setState] = useState(true);
  const x = useSpring(0, { stiffness: 15 });

  const background = useTransform(x, [-10, 10], ['#c7c2c2', '#313131']);

  useEffect(() => {
    let direction = false;
    let value = -10;

    const pulseEffect = () => {
      if (value === 10) direction = true;
      if (value === -10) direction = false;
      if (direction) {
        value = (value % 360) - 1;
      } else {
        value = (value % 360) + 1;
      }
      setState(value);
    };

    const interval = setInterval(pulseEffect, 40);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    x.set(state);
  }, [state, x]);

  return (
    <motion.div
      style={{ background }}
      className={`${styles.skeleton} ${styles[type]}`}
    />
  );
};

export default SkeletonElement;
