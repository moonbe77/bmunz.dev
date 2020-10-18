import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';

const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <nav className='wrapper'>
      <div>
        <a href='/' className='header-logo--link'>
          <img className='header-logo--image' src='/bm-logo.gif' alt='' />
        </a>
      </div>
      <class>
        <ul className='menu'>
          <li className='menu-links'>
            <a href='/projects'>PORTFOLIO</a>
          </li>
          <li className='menu-links'>
            <a href='/contact'>CONTACT</a>
          </li>
        </ul>
      </class>
    </nav>
  </header>
);
export default Header;
Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
