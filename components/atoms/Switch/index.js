import PropTypes from 'prop-types';
import { useStateDispatch } from '../../../store/store';
import style from './switch.module.css';

function Switch({ value, type, children }) {
  const dispatch = useStateDispatch();

  function handleChange() {
    dispatch({
      type,
      payload: value,
    });
  }

  const changeThemeShortCut = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${style.switch}`}
      onClick={handleChange}
      onKeyDown={changeThemeShortCut}
      role="button"
      tabIndex="0"
      data-testid="switch-button"
    >
      {children}
    </div>
  );
}

export default Switch;

Switch.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};
