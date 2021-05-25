import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { useStateContext } from '../store/store';
import ResourceCard from '../components/molecules/ResourceCard';
import styles from '../styles/resources.module.css';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const Resources = () => {
  const [sort, setSort] = useState('descending');
  const [tagFilter, setTagFilter] = useState('');
  // const [notionData, setNotionData] = useState()
  const { isDarkTheme } = useStateContext();

  const fetcher = (...args) => fetch(...args).then((resp) => resp.json());
  const { data, error } = useSWR(
    `/api/notion?sort=${sort}&tag=${tagFilter}`,
    fetcher
  );

  // TODO: query filtered list when click on a tag
  // TODO: add loading skeleton
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        {Array(10).map(() => (
          <div>Loading ...</div>
        ))}
      </div>
    );

  const handleSort = () => {
    setSort((prev) => (prev === 'ascending' ? 'descending' : 'ascending'));
  };

  const handleTagFilter = (tag) => {
    setTagFilter(tag);
  };

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <h1>Resources</h1>
      <h4>
        Using the recent released beta of the Notion API, I'm fetching a
        database of resources that I gather to have them as a quick access and
        maybe they can help someone else to discover something new.
      </h4>
      <div className={styles.options}>
        <input type="text" placeholder="search" />
        <button
          type="button"
          className={styles.sortButton}
          onClick={handleSort}
        >
          sort
        </button>
        {tagFilter.length > 0 && (
          <span>
            <button
              onClick={() => {
                setTagFilter('');
              }}
            >
              Clear Filter
            </button>
          </span>
        )}
      </div>

      {/* TODO: add component that handles all the business logic here */}

      <motion.div layout className={styles.cardsWrapper} variants={stagger}>
        {data &&
          data.results.map((item) => (
            <ResourceCard layout
              key={item.id}
              item={item}
              isDarkTheme={isDarkTheme}
              handleTagFilter={handleTagFilter}
            />
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Resources;
