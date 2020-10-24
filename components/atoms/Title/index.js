import React from 'react';
import PropTypes from 'prop-types';
import style from './title.module.css';

const Title = (props) => {
  const { children, size, primary, color } = props;
  const mode = primary ? style.primary : style.secondary;
  let titleSize;
  switch (size) {
    case 'small':
      titleSize = style.small;
      break;
    case 'medium':
      titleSize = style.medium;
      break;
    case 'large':
      titleSize = style.large;
      break;

    default:
      titleSize = style.medium;
      break;
  }

  return (
    <div className={`${mode} ${titleSize} `} style={color && { color }}>
      {children}
    </div>
  );
};

export default Title;

Title.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf[('small', 'medium', 'large')],
};

Title.defaultProps = {
  primary: true,
  size: 'medium',
};
