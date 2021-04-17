/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';
import { set } from 'react-ga';
import { FaSpotify, FaPlayCircle } from 'react-icons/fa';
import useSWR from 'swr';
import styles from './spotify.module.css';

function PlayingNow(props) {
  // const [playing, setPlaying] = useState(null);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('/api/playing-now', fetcher, {
    refreshInterval: 60000,
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  return (
    <div className={styles.spotify}>
      <div className={styles.spotifyIcon}>
        <FaSpotify />
      </div>
      <div className={styles.spotifyPlayingNow}>
        <h4>Playing now:</h4>
        <div>
          <FaPlayCircle /> {data?.title} - {data?.album} - {data?.artist}
        </div>
        {data.album && (
          <img
            src={data?.albumImageUrl}
            width="100"
            alt={`${data?.album} album cover from spotify`}
          />
        )}
      </div>
    </div>
  );
}

export default PlayingNow;
