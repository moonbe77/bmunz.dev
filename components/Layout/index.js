import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { initGA, logPageView } from '../../utils/analytics';
import { useStateContext, useStateDispatch } from '../../store/store';
import Header from '../molecules/Header';
import TicTacToe from '../molecules/TicTacToe';
import Bot from '../molecules/Bot';
import Footer from '../molecules/Footer';
import styles from './layout.module.scss';
// import BotButton from '../molecules/Bot/BotButton';

export default function Layout({ children }) {
  const { isDarkTheme, showTicTacToe, showBot } = useStateContext();

  const theme = isDarkTheme ? styles.dark : styles.light;
  const router = useRouter();
  const mainScrollRef = useRef();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, [router]);

  return (
    <>
      <motion.div className={`${theme}`}>
        <div className={`${styles.container}`}>
          <Header />
          <motion.main
            ref={mainScrollRef}
            animate={{ opacity: 1 }}
            className={styles.content}
          >
            {children}
          </motion.main>
          <Footer isDarkTheme={isDarkTheme} />
        </div>
      </motion.div>
      {showTicTacToe && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <TicTacToe />
        </motion.div>
      )}
      <Bot />
      <div className={`${styles.elipse} ${styles.elipse1}`}>
        <img
          src="/figma/elipses/Ellipse1.svg"
          alt="background ellipsis 1"
          srcSet=""
        />
      </div>
      <div className={`${styles.elipse} ${styles.elipse2}`}>
        <img
          src="/figma/elipses/Ellipse2.svg"
          alt="background ellipsis 2"
          srcSet=""
        />
      </div>
      <div className={`${styles.elipse} ${styles.elipse3}`}>
        <img
          src="/figma/elipses/Ellipse3.svg"
          alt="background ellipsis 3"
          srcSet=""
        />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
