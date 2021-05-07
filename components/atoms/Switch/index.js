import PropTypes from 'prop-types';
import style from './switch.module.css';

function Switch({ children, onClick }) {
  const changeThemeShortCut = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${style.switch}`}
      onClick={onClick}
      onKeyDown={changeThemeShortCut}
      role="button"
      tabIndex="0"
      data-testid="switch"
    >
      {children}
    </div>
  );
}

export default Switch;

Switch.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
