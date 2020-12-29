import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  const { children, size, primary } = props;
  const mode = primary
    ? 'text-blue-700 text-2xl border-b-2 mb-8'
    : 'text-blue-500 text-xl';

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
