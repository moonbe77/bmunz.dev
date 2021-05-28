import { Client } from '@notionhq/client';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useStateContext } from '../store/store';
import ResourceCard from '../components/molecules/ResourceCard';
import { SkeletonCard } from '../components/molecules/Skeleton';
import styles from '../styles/resources.module.css';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fetcher = (...args) => fetch(...args).then((resp) => resp.json());

const useResources = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Resources = ({ resources }) => {
  const { isDarkTheme } = useStateContext();
  const [sort, setSort] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [search, setSearch] = useState('');
  const [resourcesData, setResourcesData] = useState(resources);

  const { data, isLoading, error } = useResources(
    `/api/notion?sort=${sort}&tag=${tagFilter}`,
    resources
  );

  useEffect(() => {
    setResourcesData(data);
  }, [data]);

  useEffect(() => {
    fetch(`/api/search_db?query=${search}`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setResourcesData(resp);
      });
  }, [search]);

  if (error) return <div>failed to load</div>;

  const handleSort = () => {
    setSort((prev) => (prev === 'ascending' ? 'descending' : 'ascending'));
  };

  const handleTagFilter = (tag) => {
    setTagFilter(tag);
  };

  const handleChange = (event) => {
    const query = event.target.value;
    if (query.length >= 3) {
      setSearch(query);
    }
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
        <input type="text" placeholder="search" onChange={handleChange} />
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
              type="button"
              onClick={() => {
                setTagFilter('');
              }}
            >
              Clear Filter
            </button>
          </span>
        )}
      </div>
      <AnimateSharedLayout>
        <motion.div className={styles.cardsWrapper} variants={stagger}>
          {isLoading &&
            Array.from(Array(7)).map((i) => <SkeletonCard key={i} />)}

          {resourcesData &&
            resourcesData.results.map((item) => (
              <ResourceCard
                key={item.id}
                item={item}
                isDarkTheme={isDarkTheme}
                handleTagFilter={handleTagFilter}
              />
            ))}
        </motion.div>
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default Resources;

Resources.propTypes = {
  resources: PropTypes.object,
};

export async function getStaticProps() {
  // Initializing a client
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const resources = await notion.databases.query({
    database_id: process.env.NOTION_DB,
    filter: {
      property: 'onWeb',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'name',
        direction: 'ascending', // ascending || descending
      },
    ],
  });

  return { props: { resources } };
}
