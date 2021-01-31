import { HiSun, HiMoon } from 'react-icons/hi';
import { useStateDispatch } from '../../../store/store';
import style from './switch.module.css';

export default function Switch({ isDarkTheme }) {
  const dispatch = useStateDispatch();

  function handleChange() {
    dispatch({
      type: 'SWITCH_THEME',
      payload: !isDarkTheme,
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
      data-testid="switch"
    >
      {isDarkTheme ? <HiSun /> : <HiMoon />}
    </div>
  );
}
