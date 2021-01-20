import { useState, useEffect } from 'react';
import disableScroll from 'disable-scroll';
import { useSpring, animated, config } from 'react-spring';
import { useStateContext } from '../../../store/store';
import Menu from '../Menu';
import style from './SideNavbar.module.css';

export default function SideNavbar() {
  const [show, setShow] = useState(false);
  const { isDarkTheme, showSideMenu } = useStateContext();

  const slide = useSpring({
    transform: show ? 'translateX(0vw)' : 'translateX(100vw)',
    config: config.stiff,
  });

  const menu = useSpring({
    transform: show ? 'translateX(0px)' : 'translateX(500px)',
    delay: 70,
  });

  useEffect(() => {
    setShow(showSideMenu);
  }, [showSideMenu]);

  const theme = isDarkTheme ? style.dark : style.light;
  useEffect(() => {
    if (showSideMenu) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  });

  return (
    <animated.div style={slide} className={`${style.wrapper} ${theme} `}>
      <animated.nav className={style.menu} style={menu}>
        <Menu />
      </animated.nav>
    </animated.div>
  );
}
