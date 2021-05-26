import { motion } from 'framer-motion';
import SkeletonElement from './SkeletonElement';
import styles from './skeleton.module.css';

const easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const SkeletonCard = () => (
  <motion.div layout variants={stagger} className={styles.card}>
    <SkeletonElement type="title" />
    <SkeletonElement type="text" style={{ width: '70%' }} />
    <SkeletonElement type="text" />
    <SkeletonElement type="text" />
    <SkeletonElement type="text" />
    <SkeletonElement type="text" />
  </motion.div>
);
