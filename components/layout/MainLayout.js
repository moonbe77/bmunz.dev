import PropTypes from 'prop-types';
import { useStateContext } from '../../store/store';
import Header from '../molecules/Header';
import style from './layout.module.css';

export default function Layout({ children }) {
  const { isDarkTheme } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;

  return (
    <div className={`${style.bodyWrapper} ${theme}`}>
      <div className={`${style.container}`}>
        <Header />
        <main className={style.content}>{children}</main>
        <footer className={style.footer}>
          Copyright 2020 - Built with Next.js
        </footer>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
