import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({
  primary,
  full,
  backgroundColor,
  size,
  children,
  ...props
}) => {
  const mode = primary ? style.primary : style.secondary;
  const width = full ? style.full : '';
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
      className={`${style.button} ${mode} ${width} ${buttonSize} `}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
