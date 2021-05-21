import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import styles from './resourcesTable.module.css';

const ResourcesTable = ({ data, isDarkTheme, handleSort }) => {
  return (
  <table
    className={`${styles.table} ${isDarkTheme ? styles.dark : styles.light}`}
  >
    <thead>
      <tr className={styles.tableColumnHeader}>
        <th>
          Name
          <button
            type="button"
            className={styles.sortButton}
            onClick={handleSort}
          >
            sort
          </button>
        </th>
        <th>Tags </th>
        <th>Link </th>
      </tr>
    </thead>
    {!data && <div>loading</div>}
    {data && <TableBody data={data} />}
  </table>
)};
export default ResourcesTable;

ResourcesTable.propTypes = {
  isDarkTheme: PropTypes.bool,
  data: PropTypes.object,
  handleSort: PropTypes.func,
};

const TableBody = ({ data }) => {
  const [state, setState] = useState();

  const [fade, api] = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  return (
    <tbody>
      {data.results.map((item) => (
        <animated.tr
          style={fade}
          className={`${styles.listItem}`}
          key={item.id}
        >
          <td>
            {item.properties.name?.title[0]?.plain_text || 'Name is not logged'}
          </td>
          <td>
            {item.properties.tags?.multi_select?.map(
              (tag) => `${tag.name}, `
            ) || '-'}
          </td>
          <td>
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
          </td>
        </animated.tr>
      ))}
    </tbody>
  );
};
