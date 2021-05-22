/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import styles from './resourceCard.module.css';

const ResourceCard = ({ item, isDarkTheme, }) => {
  const theme = isDarkTheme ? styles.dark : styles.light;

  const [fade, api] = useSpring(() => ({ from: { opacity: 0 }, to: { opacity: 1 } }));

  // useEffect(() => {
  //   console.log('calling api');
  //   api.set({ opacity: 1 })
  // }, [item, api])

  return (
      <animated.div
        style={fade}
        className={`${styles.card} ${theme}`}
        key={item.id}
      >
        <div>
          {item.properties.name?.title[0]?.plain_text || 'Name is not logged'}
        </div>
        <div>
          {item.properties.tags?.multi_select?.map(
            (tag) => `${tag.name}, `
          ) || '-'}
        </div>
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
  handleSort: PropTypes.func,
  
};


