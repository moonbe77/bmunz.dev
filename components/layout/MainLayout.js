import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useStateContext } from '../../store/store';
import Header from '../molecules/Header';
import { initGA, logPageView } from '../../utils/analytics';
import style from './layout.module.css';

export default function Layout({ children }) {
  const { isDarkTheme } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });

  return (
    <div className={`${style.bodyWrapper} ${theme}`}>
      <div className={`${style.container}`}>
        <Header />
        <main className={style.content}>{children}</main>
        <footer className={style.footer}>
          Copyright 2020 - Built with Next.js
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

Layout.propTypes = {
  children: PropTypes.node,
};
