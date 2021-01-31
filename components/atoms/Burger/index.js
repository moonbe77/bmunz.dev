// Burger.js
import { useSpring, animated } from 'react-spring';
import { useStateContext, useStateDispatch } from '../../../store/store';
import style from './Burger.module.css';

export default function Burger() {
  const { isDarkTheme, showSideMenu } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const dispatch = useStateDispatch();

  const line1 = useSpring({
    transform: showSideMenu ? 'rotate(45deg)' : 'rotate(0deg)',
  });

  const line2 = useSpring({
    opacity: showSideMenu ? 0 : 1,
  });
  const line3 = useSpring({
    transform: showSideMenu ? 'rotate(-45deg)' : 'rotate(0deg)',
  });

  const handleSideMenu = () => {
    dispatch({
      type: 'TOGGLE_SIDE_MENU',
      payload: !showSideMenu,
    });
  };

  return (
    <div className={style.burger} onClick={handleSideMenu} >
      <animated.div style={line1} className={`${style.line} ${theme}`} />
      <animated.div style={line2} className={`${style.line} ${theme}`} />
      <animated.div style={line3} className={`${style.line} ${theme}`} />
    </div>
  );
}
