/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import styles from './resourceCard.module.css';

const ResourceCard = ({ item, isDarkTheme, }) => {
  const theme = isDarkTheme ? styles.dark : styles.light;

  const [fade, api] = useSpring(() => ({ from: { opacity: 0 }, to: { opacity: 1 } }));

  return (
      <animated.div
        style={fade}
        className={`${styles.card} ${theme}`}
        key={item.id}
      >
        <header className={styles.header}>
          {item.properties.name?.title[0]?.plain_text || 'Name is not logged'}
        </header>
        <div>
          {item.properties.comments.text.length > 0 && item.properties.comments.text[0].plain_text}
        </div>
        <footer>
          {item.properties.tags?.multi_select?.map(
            (tag) => `${tag.name}, `
          ) || '-'}
        </footer>
        <div>
          {item.properties.url ? (
            <a
              href={item.properties.url?.url}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noreferrer"
            >
              🔗
            </a>
          ) : (
            'link missing'
          )}
        </div>
      </animated.div>
  );
};

export default ResourceCard;

ResourceCard.propTypes = {
  isDarkTheme: PropTypes.bool,
  item: PropTypes.object,  
};


