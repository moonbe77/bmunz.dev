import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? style.primary : style.secondary;

  const buttonSize =
    size === 'small'
      ? style.small
      : size === 'medium'
      ? style.medium
      : style.large;

  return (
    <button
      type="button"
      className={`${style.button} ${mode} ${buttonSize} `}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
