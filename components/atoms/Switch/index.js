import PropTypes from 'prop-types';
import style from './switch.module.css';

function Switch({ children, onClick, testid }) {
  const changeThemeKeyShortcut = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${style.switch}`}
      onClick={onClick}
      onKeyDown={changeThemeKeyShortcut}
      role="button"
      tabIndex="0"
      data-testid={testid}
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
