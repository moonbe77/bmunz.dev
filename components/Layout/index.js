import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTransition, useSpring, animated } from 'react-spring';
import Footer from '../molecules/Footer';
import { useStateContext } from '../../store/store';
import Header from '../molecules/Header';
import TicTacToe from '../molecules/TicTacToe';
import { initGA, logPageView } from '../../utils/analytics';
import styles from './layout.module.css';

export default function Layout({ children }) {
  const { isDarkTheme, showTicTacToe } = useStateContext();
  const theme = isDarkTheme ? styles.dark : styles.light;
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

  return (
    <>
      <animated.div style={fade} className={`${theme}`}>
        <div className={`${styles.container}`}>
          <Header isDarkTheme={isDarkTheme} />
          <main isDarkTheme={isDarkTheme} className={styles.content}>{children}</main>
          <Footer isDarkTheme={isDarkTheme} />
          <div className={`${styles.elipse} ${styles.elipse1}`}>
            <img src="/figma/elipses/Ellipse1.svg" alt="background ellipsis 1" srcSet="" />
          </div>
          <div className={`${styles.elipse} ${styles.elipse2}`}>
            <img src="/figma/elipses/Ellipse2.svg" alt="background ellipsis 2" srcSet="" />
          </div>
          <div className={`${styles.elipse} ${styles.elipse3}`}>
            <img src="/figma/elipses/Ellipse3.svg" alt="background ellipsis 3" srcSet="" />
          </div>
        </div>
      </animated.div>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              className={styles.gameWrapper}
              key={key}
              style={props}
            >
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
