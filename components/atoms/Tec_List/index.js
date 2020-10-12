import React from 'react';
import PropTypes from 'prop-types';

const TecList = ({ list }) => {
  return (
    <div className='tec-list'>
      {list &&
        list.map((item) => <div className='tec-list--item'>{item}</div>)}
    </div>
  );
};

export default TecList;

TecList.propTypes = {
  list: PropTypes.array.isRequired,
};

