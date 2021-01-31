/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ primary, backgroundColor, size, children, ...props }) => {
  const mode = primary ? style.primary : style.secondary;
  let buttonSize;

  if (size === 'small') {
    buttonSize = style.small;
  } else if (size === 'medium') {
    buttonSize = style.medium;
  } else if (size === 'large') {
    buttonSize = style.large;
  } else if (size === 'full') {
    buttonSize = style.full;
  } else {
    buttonSize = style.medium;
  }

  return (
    <button
      type="button"
      className={`${style.button} ${mode} ${buttonSize} `}
      style={backgroundColor && { backgroundColor }}
      {...props}
      data-testid="button"
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  primary: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.string,
};
