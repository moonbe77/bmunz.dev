import { HiSun, HiMoon } from 'react-icons/hi';
import { useStateContext, useStateDispatch } from '../../../store/store';
import style from './switch.module.css';

export default function Switch() {
  const state = useStateContext();
  const { isDarkTheme } = state;
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
    >
      {isDarkTheme ? <HiSun /> : <HiMoon />}
    </div>
  );
}
