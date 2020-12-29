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
    console.log(e);
  };

  const shadow = isDarkTheme ? style.shadowDark : style.shadowLight;
  return (
    <>
      <div
        className={`${style.switch} ${shadow}`}
        onClick={handleChange}
        onKeyDown={changeThemeShortCut}
        role="option"
        tabIndex={0}
      >
        {isDarkTheme ? <HiSun /> : <HiMoon />}
      </div>
    </>
  );
}
