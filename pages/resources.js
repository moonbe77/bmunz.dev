import { useState } from 'react';
import useSWR from 'swr';
import { useStateContext } from '../store/store';
import ResourcesTable from '../components/molecules/ResourcesTable';
import styles from '../styles/resources.module.css';

const Resources = () => {
  const [sort, setSort] = useState('descending');
  const { isDarkTheme } = useStateContext();

  const fetcher = (...args) => fetch(...args).then((resp) => resp.json());
  const { data, error } = useSWR(`/api/notion?sort=${sort}`, fetcher); // ascending || descending

  if (error) return <div>failed to load</div>;

  // TODO: query filtered list when click on a tag
  // TODO: query sorted list ascendent or descendent when click on button :_pending => styling of button;

  const handleSort = () => {
    setSort((prev) => (prev === 'ascending' ? 'descending' : 'ascending'));
  };

  return (
    <div>
      <h1>Resources</h1>
      <h3>List of Resources for quick access</h3>

      {/* TODO: add component that handles all the business logic here */}

      <div className={styles.resourcesList}>
        <ResourcesTable
          data={data}
          isDarkTheme={isDarkTheme}
          handleSort={handleSort}
        />
      </div>
    </div>
  );
};

export default Resources;
