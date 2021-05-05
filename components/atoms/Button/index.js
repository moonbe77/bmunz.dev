/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({
  primary,
  backgroundColor,
  size,
  children,
  isDarkTheme,
  disabled,
  ...props
}) => {
  const mode = primary ? style.primary : style.secondary;
  const theme = isDarkTheme ? style.dark : style.light;
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
      className={`${style.button} ${mode} ${buttonSize} ${theme}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
      data-testid="button-component"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  primary: PropTypes.bool,
  isDarkTheme: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  disabled: false,
};
