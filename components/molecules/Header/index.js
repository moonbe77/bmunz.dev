import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useStateContext } from '../../../store/store';
import Burger from '../../atoms/Burger';
import style from './header.module.css';
import SideNavbar from '../SideNavbar';
import Switch from '../../atoms/Switch';
import Menu from '../Menu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState();
  const [windowSize, setWindowSize] = useState();
  const { isDarkTheme, showTicTacToe } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;

  useEffect(() => {
    const getWindowSize = () => {
      const size = window.innerWidth || document.body.clientWidth;
      setWindowSize(size);
    };
    getWindowSize();
    window.addEventListener('resize', getWindowSize);
    return () => window.removeEventListener('resize', getWindowSize);
  }, []);

  useEffect(() => {
    if (windowSize <= 840) {
      setShowMobileMenu(true);
      return;
    }
    setShowMobileMenu(false);
  }, [windowSize]);

  return (
    <header className={`${style.header} ${theme}`}>
      <div className={`${style.wrapper} `}>
        {/* logo */}
        <div>
          <Link href="/">
            <a className={style.logo}>
              <img src="./figma/bmunz.svg" alt="bmunz.dev logo svg" />
            </a>
          </Link>
        </div>
        {/* menuGroup */}
        <div className={style.menuGroup}>
          {!showMobileMenu && (
            <nav className={style.menu}>
              <Menu />
            </nav>
          )}
          {showMobileMenu && (
            <>
              <SideNavbar />
              <Burger />
            </>
          )}
          <Switch value={!isDarkTheme} type="SWITCH_THEME">
            {isDarkTheme ? <HiSun /> : <HiMoon />}
          </Switch>
          <Switch value={!showTicTacToe} type="SWITCH_GAME">
            #
          </Switch>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {};

Header.defaultProp = {};
