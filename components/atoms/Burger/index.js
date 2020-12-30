// Burger.js
import { useStateContext, useStateDispatch } from '../../../store/store';
import style from './Burger.module.css';

export default function Burger() {
  const { isDarkTheme, showSideMenu } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const dispatch = useStateDispatch();

  const handleSideMenu = () => {
    dispatch({
      type: 'TOGGLE_SIDE_MENU',
      payload: !showSideMenu,
    });
  };

  return (
    <div className={style.burger} onClick={handleSideMenu}>
      <div className={`${style.line} ${theme}`} />
      <div className={`${style.line} ${theme}`} />
      <div className={`${style.line} ${theme}`} />
    </div>
  );
}
