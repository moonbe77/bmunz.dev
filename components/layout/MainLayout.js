import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaSpotify, FaPlayCircle } from 'react-icons/fa';
import { useStateContext } from '../../store/store';
import Header from '../molecules/Header';
import { initGA, logPageView } from '../../utils/analytics';
import style from './layout.module.css';

export default function Layout({ children }) {
  const { isDarkTheme } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const [lastSong, setLastSong] = useState(null);
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  useEffect(() => {
    fetch('/api/top-tracks')
      .then((res) => res.json())
      .then((res) => setLastSong(res))
      .catch((err) => console.log(err));
  }, [setLastSong]);

  useEffect(() => {
    fetch('/api/playing-now')
      .then((res) => res.json())
      .then((res) => setPlaying(res))
      .catch((err) => console.log(err));
  }, [setPlaying]);
  return (
    <div className={`${theme}`}>
      <div className={`${style.container}`}>
        <Header />
        <main className={style.content}>{children}</main>

        <footer className={style.footer}>
          <div className={style.contact}>
            <div
              className="LI-profile-badge"
              data-version="v1"
              data-size="medium"
              data-locale="es_ES"
              data-type="horizontal"
              data-theme="dark"
              data-vanity="munzbe"
            >
              <a
                className="LI-simple-link"
                href="https://au.linkedin.com/in/munzbe?trk=profile-badge"
              >
                Bernardo Munz
              </a>
            </div>
            <div>2021</div>
          </div>
          <div className={style.spotify}>
            <h1>
              <FaSpotify />
            </h1>
            <h4>
              <FaPlayCircle /> {playing?.title} - {playing?.album} -{' '}
              {playing?.artist}
            </h4>
            <h4>Last 10 Songs Listened</h4>
            <ul className={style.spotifyList}>
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
        </footer>

        <div className={`${style.elipse} ${style.elipse1}`}>
          <img src="/figma/elipses/Ellipse1.svg" alt="" srcSet="" />
        </div>
        <div className={`${style.elipse} ${style.elipse2}`}>
          <img src="/figma/elipses/Ellipse2.svg" alt="" srcSet="" />
        </div>
        <div className={`${style.elipse} ${style.elipse3}`}>
          <img src="/figma/elipses/Ellipse3.svg" alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
}
