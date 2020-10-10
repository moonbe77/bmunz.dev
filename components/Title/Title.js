import React from 'react';
import PropTypes from 'prop-types';
// import './title.css';

const Title = ({ text, size, primary, color }) => {
  const mode = primary ? 'title-primary' : 'title-secondary';
  return (
    <div className={`title-${size} ${mode}`} style={color && { color }}>
      {text}
    </div>
  );
};

export default Title;

Title.propTypes = {
  primary: PropTypes.bool,
  text: PropTypes.string,
  size: PropTypes.oneOf[('small', 'medium', 'large')],
};

Title.defaultProps = {
  primary: true,
  text: '',
  size: 'large',
};
