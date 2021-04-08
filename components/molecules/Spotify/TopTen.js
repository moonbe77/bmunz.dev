import { useEffect, useState } from 'react';
import styles from './spotify.module.css';

function TopTen() {
  const [lastSong, setLastSong] = useState(null);
  // spotify top 10 tracks
  useEffect(() => {
    fetch('/api/top-tracks')
      .then((res) => res.json())
      .then((res) => setLastSong(res))
      .catch((err) => console.log(err));
  }, [setLastSong]);

  return (
    <div>
      <h4>My top 10 Songs Listened</h4>
      <ul className={styles.spotifyList}>
        {lastSong &&
          lastSong.tracks.map((song, i) => (
            <li key={i}>
              <a
                href={song.songUrl}
                target="_blank"
                rel="noreferrer"
                alt={`link to ${song.title}`}
              >{`${song.title} - ${song.artist}`}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TopTen;
