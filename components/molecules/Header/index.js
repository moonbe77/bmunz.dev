import React from 'react';
import PropTypes from 'prop-types';
import style from './header.module.css';

const Header = (props) => {
  const theme = props.theme === 'dark' ? style.dark : '';

  return (
    <header className={`${style.header} ${theme}`}>
      <nav className={style.wrapper}>
        <div>
          <a href='/' id={style.logo}></a>
        </div>
        <div>
          <ul className={style.menu}>
            <li className={style.links}>
              <a href='/portfolio'>PORTFOLIO</a>
            </li>
            <li className={style.links}>
              <a href='https://github.com/moonbe77'>GITHUB</a>
            </li>
            <li className={style.links}>
              <a
                href='https://www.linkedin.com/in/munzbe/'
                target='_blank'
                rel='noreferrer  noopener'
              >
                LINKEDIN
              </a>
            </li>
            <li className={style.links}>
              <a href='https://twitter.com/moonbe77'>TWITTER</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  theme: PropTypes.string,
};

Header.defaultProp = {
  theme: 'dark',
};
