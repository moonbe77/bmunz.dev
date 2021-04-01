import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FaSpotify, FaPlayCircle } from 'react-icons/fa';
import { useTransition, useSpring, animated } from 'react-spring';
import { useStateContext } from '../../store/store';
import Header from '../molecules/Header';
import TicTacToe from '../molecules/TicTacToe';
import { initGA, logPageView } from '../../utils/analytics';
import style from './layout.module.css';

export default function Layout({ children }) {
  const { isDarkTheme, showTicTacToe } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const [lastSong, setLastSong] = useState(null);
  const [playing, setPlaying] = useState(null);
  const router = useRouter();
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  const transitions = useTransition(showTicTacToe, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, [router]);

  // spotify top 10 tracks
  useEffect(() => {
    fetch('/api/top-tracks')
      .then((res) => res.json())
      .then((res) => setLastSong(res))
      .catch((err) => console.log(err));
  }, [setLastSong]);

  // spotify playing now
  useEffect(() => {
    fetch('/api/playing-now')
      .then((res) => res.json())
      .then((res) => setPlaying(res))
      .catch((err) => console.log(err));
  }, [setPlaying]);

  return (
    <>
      <animated.div style={fade} className={`${theme}`}>
        <div className={`${style.container}`}>
          <Header />
          <main className={style.content}>{children}</main>

          <footer className={style.footer}>
            <div className={style.contact}>
              {/* <div
                className="LI-profile-badge"
                data-version="v1"
                data-size="medium"
                data-locale="es_ES"
                data-type="horizontal"
                data-theme="dark"
                data-vanity="munzbe"
              >
            </div> */}
              Linkedin:{' '}
              <a
                className="LI-simple-link"
                href="https://au.linkedin.com/in/munzbe?trk=profile-badge"
              >
                Bernardo Munz
              </a>
              <div>2021</div>
            </div>
            <div className={style.spotify}>
              <div className={style.spotifyIcon}>
                <FaSpotify />
              </div>
              <div className={style.spotifyPlayingNow}>
                <h4>Playing now:</h4>
                <div>
                  <FaPlayCircle /> {playing?.title} - {playing?.album} -{' '}
                  {playing?.artist}
                </div>
              </div>
              <div>
                <h4>My top 10 Songs Listened</h4>
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
      </animated.div>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div className={style.gameWrapper} key={key} style={props}>
              <TicTacToe />
            </animated.div>
          )
      )}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
