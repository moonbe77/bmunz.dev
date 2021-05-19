import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import styles from '../styles/resources.module.css';
import useSWR from 'swr';

const Resources = () => {
  // const [data, setData] = useState();
  const fetcher = (...args) => fetch(...args).then(data => data.json());


  const { data, error } = useSWR('/api/notion', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  // table with filters and sorting list

  return (
    <div>
      <h1>Resources</h1>
      <h3>list of resources and inspiration that I use everyday</h3>
      <div className={styles.resourcesList}>
        <table className={styles.table}>
          <thead>

            <tr>
              <th>Name</th>
              <th>Tags</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>

            {data.results.map((item) => {
              return <tr className={styles.listItem} key={item.id}>
                <th>
                  {item.properties.name?.title[0]?.plain_text || 'Name is not logged'}
                </th>
                <th>
                  {item.properties.tags?.multi_select?.map(item => `${item.name},`) || '-'}
                </th>
                <th>
                  {item.properties.name?.title[0]?.plain_text || 'Name is not logged'}
                </th>
              </tr>
            }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resources;


