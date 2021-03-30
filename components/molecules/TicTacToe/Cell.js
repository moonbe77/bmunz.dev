import React from 'react';
import PropTypes from 'prop-types';

function Cell(props) {
  const { handleClick, dataRow, dataCol, handleKeydown, id } = props;

  return (
    <div
      id={id}
      className="cell"
      role="button"
      onClick={handleClick}
      data-row={dataRow}
      data-col={dataCol}
      onKeyDown={handleKeydown}
      aria-pressed="false"
      tabIndex="0"
      aria-label={`Tic Tac Toe row ${dataRow + 1} column ${dataCol + 1}`}
    />
  );
}

export default Cell;

Cell.propTypes = {
  id: PropTypes.number,
  dataRow: PropTypes.number,
  dataCol: PropTypes.number,
  handleClick: PropTypes.func,
  handleKeydown: PropTypes.func,
};
