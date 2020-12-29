import React from 'react';
import PropTypes from 'prop-types';
import style from './StringWithBorder.module.css';

const StringWithBorder = ({ string }) => (
  <div className={style.box}>{string}</div>
);

export default StringWithBorder;

StringWithBorder.propTypes = {
  string: PropTypes.string.isRequired,
};
