// ResourceCard
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './resourceCard.module.css';

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

const ResourceCard = ({ item, isDarkTheme, handleTagFilter }) => {
  const theme = isDarkTheme ? styles.dark : styles.light;

  return (
    <motion.div
      layout
      variants={fadeInUp}
      className={`${styles.card} ${theme}`}
      key={item.id}
    >
      <header className={styles.header}>
        <a
          href={item.properties.url?.url || '#'}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noreferrer"
        >
          {item.properties.name?.title[0]?.plain_text || 'Name is not logged'}
        </a>
      </header>
      <div className={styles.body}>
        {item.properties.comments?.rich_text[0]?.plain_text || 'no comment'}
      </div>
      <footer className={styles.footer}>
        {item.properties.tags?.multi_select?.map((tag, i) => (
          <div
            key={i}
            className={styles.tag}
            onClick={() => handleTagFilter(tag.name)}
          >
            {tag.name}
          </div>
        ))}
      </footer>
    </motion.div>
  );
};

export default ResourceCard;

ResourceCard.propTypes = {
  isDarkTheme: PropTypes.bool,
  item: PropTypes.object,
  handleTagFilter: PropTypes.func,
};
