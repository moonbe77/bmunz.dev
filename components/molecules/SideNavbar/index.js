import { useState, useEffect } from 'react';
import disableScroll from 'disable-scroll';
import { useStateContext } from '../../../store/store';
import Menu from '../Menu';
import style from './SideNavbar.module.css';

export default function SideNavbar() {
  const [show, setShow] = useState(false);
  const { isDarkTheme, showSideMenu } = useStateContext();

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
    <div className={`${style.wrapper} ${theme} ${!show && style.hidden}`}>
      <nav className={style.menu}>
        <Menu />
      </nav>
    </div>
  );
}
