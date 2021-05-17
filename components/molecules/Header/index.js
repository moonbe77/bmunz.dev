import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiSun, HiMoon } from 'react-icons/hi';
import { GiTicTacToe } from 'react-icons/gi';
import { useStateContext, useStateDispatch } from '../../../store/store';
import Burger from '../../atoms/Burger';
import style from './header.module.css';
import SideNavbar from '../SideNavbar';
import Switch from '../../atoms/Switch';
import Menu from '../Menu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState();
  const [windowSize, setWindowSize] = useState();
  const { isDarkTheme, showTicTacToe, showSideMenu } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const dispatch = useStateDispatch();

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
    if (windowSize <= 875) {
      setShowMobileMenu(true);
      return;
    }
    setShowMobileMenu(false);
  }, [windowSize]);

  const handleSideMenu = () => {
    dispatch({
      type: 'TOGGLE_SIDE_MENU',
      payload: !showSideMenu,
    });
    return 'clicked';
  };

  function handleChangeTheme() {
    dispatch({
      type: 'SWITCH_THEME',
      payload: !isDarkTheme,
    });
  }

  function handleShowGame() {
    dispatch({
      type: 'SWITCH_GAME',
      payload: !showTicTacToe,
    });
  }

  return (
    <header className={`${style.header} ${theme}`} data-testid="header">
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
              <Burger
                isDarkTheme={isDarkTheme}
                showSideMenu={showSideMenu}
                handleSideMenu={handleSideMenu}
              />
            </>
          )}
          <Switch onClick={handleChangeTheme} testid="switch-theme">
            {isDarkTheme ? <HiSun /> : <HiMoon />}
          </Switch>
          <Switch onClick={handleShowGame} testid="switch-game">
            <GiTicTacToe />
          </Switch>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {};

Header.defaultProp = {};
