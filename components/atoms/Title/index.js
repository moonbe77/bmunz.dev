import React from 'react';
import PropTypes from 'prop-types';
// import './title.css';

const Title = ({children, text, size, primary, color }) => {
  const mode = primary ? 'title-primary' : 'title-secondary';
  return (
    <div className={`title-${size} ${mode}`} style={color && { color }}>
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
