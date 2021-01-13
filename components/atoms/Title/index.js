import React from 'react';
import PropTypes from 'prop-types';
import style from './title.module.css'

const Title = (props) => {
  const { children, size, primary } = props;
  const mode = primary ? style.primary : style.secondary;

  let titleSize;
  switch (size) {
    case 'small':
      titleSize = `text`;
      break;
    case 'medium':
      titleSize = 'text-base';
      break;
    case 'large':
      titleSize = 'text-xl';
      break;

    default:
      titleSize = 'text-base';
      break;
  }

  return <div className={`${mode} ${titleSize}`}> {children}</div>;
};

export default Title;

Title.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node,
};

Title.defaultProps = {
  primary: false,
  size: 'medium',
};
