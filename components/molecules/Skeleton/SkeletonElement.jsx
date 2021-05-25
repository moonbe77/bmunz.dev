import styles from './skeleton.module.css';

const SkeletonElement = ({ type }) => (
  <div className={`${styles.skeleton} ${styles[type]}`} />
);

export default SkeletonElement;
