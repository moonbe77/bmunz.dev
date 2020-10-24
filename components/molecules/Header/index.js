import React from 'react';
import PropTypes from 'prop-types';
import style from './header.module.sass';

const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header className={style.header}>
    <nav className={style.wrapper}>
      <div>
        <a href='/'>
          <img className={style.logoImage} src='/bm-logo.gif' alt='' />
        </a>
      </div>
      <class>
        <ul className={style.menu}>
          <li className={style.links}>
            <a href='/portfolio'>PORTFOLIO</a>
          </li>
          <li className={style.links}>
            <a href='/contact'>CONTACT</a>
          </li>
          <li className={style.links}>
            <a href='/contact'>GITHUB</a>
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
        </ul>
      </class>
    </nav>
  </header>
);
export default Header;
Header.propTypes = {
  user: PropTypes.shape({}),
  // onLogin: PropTypes.func.isRequired,
  // onLogout: PropTypes.func.isRequired,
  // onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
