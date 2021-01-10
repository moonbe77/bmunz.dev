import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useStateContext } from '../../../store/store';
import Burger from '../../atoms/Burger';
import style from './header.module.css';
import SideNavbar from '../SideNavbar';
import Menu from '../Menu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState();
  const [windowSize, setWindowSize] = useState();
  const { isDarkTheme } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const router = useRouter();

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
    if (windowSize <= 660) {
      setShowMobileMenu(true);
      return;
    }
    setShowMobileMenu(false);
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
    <header className={`${style.header} ${theme}`}>
      <div className={`${style.wrapper} `}>
        <div>
          <Link href="/">
            <a>
              <div className={`${style.logo}`} />
            </a>
          </Link>
        </div>
        BETA - OnProgress
        {!showMobileMenu && (
          <nav className={style.menu}>
            <Menu />
          </nav>
        )}
      </div>
      {showMobileMenu && (
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
