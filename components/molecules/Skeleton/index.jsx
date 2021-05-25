import { motion } from 'framer-motion';
import SkeletonElement from './SkeletonElement';
import styles from './skeleton.module.css';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const SkeletonCard = () => (
  <motion.div variants={fadeInUp} className={styles.card}>
    <SkeletonElement type="title" />
    <SkeletonElement type="text" />
    <SkeletonElement type="text" />
    <SkeletonElement type="text" />
    <SkeletonElement type="text" />
    <SkeletonElement type="text" />
  </motion.div>
);
