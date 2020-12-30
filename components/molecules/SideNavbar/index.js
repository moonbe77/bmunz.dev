import { useState, useEffect } from 'react';
import style from './SideNavbar.module.css';
import { useStateContext } from '../../../store/store';

export default function SideNavbar() {
  const [isHidden, setIsHidden] = useState(true);
  const { isDarkTheme, showSideMenu } = useStateContext();

  useEffect(() => {
    setIsHidden(showSideMenu);
  }, [showSideMenu]);

  return (
    <div
      className={`${style.wrapper} ${isDarkTheme ? style.dark : style.light} ${
        isHidden && style.hidden
      }`}
    >
      side navbar
    </div>
  );
}
