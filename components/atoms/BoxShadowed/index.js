import React from 'react';
import PropTypes from 'prop-types';
import style from './boxShadowed.module.css';

const BoxShadowed = (props) => {
  const { children, padSize, dataAos } = props;
  let padding;

  switch (padSize) {
    case 'small':
      padding = style.paddingSmall;
      break;
    case 'medium':
      padding = style.paddingMedium;
      break;
    case 'large':
      padding = style.paddingLarge;
      break;
    case 'none':
      padding = style.paddingNone;
      break;
    default:
      padding = style.paddingSmall;
      break;
  }
  
  return (
    <div className={`${style.wrapper} ${padding}`} data-aos={dataAos}>
      {children}
    </div>
  );
};

export default BoxShadowed;

BoxShadowed.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  padSize: PropTypes.oneOf(['small', 'medium', 'large','none']),
};

BoxShadowed.defaultProps = {
  padSize: 'small',
};
