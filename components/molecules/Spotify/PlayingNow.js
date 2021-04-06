import { useEffect, useState } from 'react';
import { FaSpotify, FaPlayCircle } from 'react-icons/fa';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import styles from './spotify.module.css';

function PlayingNow(props) {
  const [playing, setPlaying] = useState(null);

  // spotify playing now
  useEffect(() => {
    fetch('/api/playing-now')
      .then((res) => res.json())
      .then((res) => setPlaying(res))
      .catch((err) => console.log(err));
  }, [setPlaying]);

  return (
    <div className={styles.spotify}>
      <div className={styles.spotifyIcon}>
        <FaSpotify />
      </div>
      <div className={styles.spotifyPlayingNow}>
        <h4>Playing now:</h4>
        <div>
          <FaPlayCircle /> {playing?.title} - {playing?.album} -{' '}
          {playing?.artist}
        </div>
      </div>
    </div>
  );
}

export default PlayingNow;
