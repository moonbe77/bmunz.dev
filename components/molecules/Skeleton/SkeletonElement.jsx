import { motion } from 'framer-motion';
import { useEffect } from 'react';
import styles from './skeleton.module.css';

const SkeletonElement = ({ type }) => {
  const pulse = {};
  
  useEffect(() => {}, []);

  return (
    <motion.div
      initial={{ y: -5 }}
      animate={{ y: 0 }}
      className={`${styles.skeleton} ${styles[type]}`}
    />
  );
};

export default SkeletonElement;
