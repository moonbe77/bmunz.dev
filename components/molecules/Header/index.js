import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useStateContext } from '../../../store/store';
import Burger from '../../atoms/Burger';
import style from './header.module.css';
import { useScroll } from '../../../utils/useScroll';
import SideNavbar from '../SideNavbar';
import Menu from '../Menu';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState();
  const [windowSize, setWindowSize] = useState();
  const { isDarkTheme } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const router = useRouter();
  const scroll = useScroll();
  // detect when scroll and hide the header
  useEffect(() => {
    if (scroll.y > 150) {
      setIsHidden(true);
      return;
    }
    setIsHidden(false);
  }, [scroll]);

  const getWindowSize = () => {
    const size = window.innerWidth || document.body.clientWidth;
    setWindowSize(size);
  };

  useEffect(() => {
    window.addEventListener('resize', getWindowSize);
    return () => window.removeEventListener('resize', getWindowSize);
  }, []);

  useEffect(() => {
    if (windowSize <= 640) {
      setShowBurgerMenu(true);
      return;
    }
    setShowBurgerMenu(false);
  }, [windowSize]);

  useEffect(() => {
    const links = document.querySelectorAll('.link');
    links.forEach((link) => {
      const border = link.nextSibling;
      if (link.pathname === router.pathname) {
        console.log(link.pathname === router.pathname);
        border.style.transform = 'scaleX(1)';
      } else {
        border.style.removeProperty('transform');
        border.style.transform = 'null';
      }
    });
  }, [router]);

  return (
    <header className={`${style.header} ${theme} ${isHidden && style.hidden}`}>
      <div className={`${style.wrapper} `}>
        <div className={`${style.logo}`}>
          <Link href="/">
            <a>bMunz.Dev</a>
          </Link>
        </div>
        <nav className={style.menu}>
          <Menu />
        </nav>
      </div>
      {showBurgerMenu && (
        <>
          <SideNavbar />
          <Burger />
        </>
      )}
    </header>
  );
};

export default Header;

Header.propTypes = {};

Header.defaultProp = {};
