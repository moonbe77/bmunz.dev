import React from 'react';
import PropTypes from 'prop-types';
import style from './boxShadowed.module.css';

const BoxShadowed = ({ children, padSize }) => {
  const padding =
    padSize === 'medium'
      ? style.padding_medium
      : padSize === 'small'
      ? style.padding_small
      : style.padding_large;

  return <div className={`${style.wrapper} ${padding}`}>{children}</div>;
};

export default BoxShadowed;

BoxShadowed.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  padSize: PropTypes.oneOf(['small', 'medium', 'large']),
};

BoxShadowed.defaultProps = {
  padSize: 'small',
};
