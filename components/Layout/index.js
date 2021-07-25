import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
      logPageView();
    }
  }, [router]);

  return (
    <>
      <motion.div className={`${theme}`}>
        <div className={`${styles.container}`}>
          <Header />
          <motion.main animate={{ opacity: 1 }} className={styles.content}>
            {children}
          </motion.main>
          <Footer isDarkTheme={isDarkTheme} />
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
        </div>
      </motion.div>
      {showTicTacToe && (
        <motion.div
          className={styles.gameWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <TicTacToe />
        </motion.div>
      )}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
