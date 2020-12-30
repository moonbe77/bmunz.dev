import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { useStateContext } from '../../../store/store';
import Switch from '../../atoms/Switch';
import style from './header.module.css';

const Header = () => {
  const state = useStateContext();
  const theme = state.isDarkTheme ? style.dark : style.light;
  const router = useRouter();

  useEffect(() => {
    const links = document.querySelectorAll('.link');
    links.forEach((link) => {
      const border = link.nextSibling;
      if (link.pathname === router.pathname) {
        console.log(link.pathname === router.pathname);
        border.style.transform = 'scaleX(1)';
      } else {
        console.log(link.pathname === router.pathname);
        border.style.removeProperty('transform');
        border.style.transform = 'null';
      }
    });
  }, [router]);

  return (
    <header className={`${style.header} ${theme}`}>
      <nav className={`${style.nav} `}>
        <div className={`${style.logo}`}>
          <Link href="/">
            <a>bMunz.Dev</a>
          </Link>
        </div>
        <ul className={style.menu}>
          <li className={`${style.links} `}>
            <Link href="/portfolio">
              <a className="link">PORTFOLIO </a>
            </Link>
            <span className={`${style.linkBorder} ${style.active}`} />
          </li>
          <li className={` ${style.links} `}>
            <a
              href="https://github.com/moonbe77"
              target="_blank"
              rel="noreferrer  noopener"
            >
              <AiOutlineGithub />
            </a>
            <span className={`${style.linkBorder} `} />
          </li>
          <li className={` ${style.links}`}>
            <a
              href="https://www.linkedin.com/in/munzbe/"
              target="_blank"
              rel="noreferrer  noopener"
            >
              <AiOutlineLinkedin />
            </a>
            <span className={`${style.linkBorder}`} />
          </li>
          <li className={`${style.links} `}>
            <a
              href="https://twitter.com/moonbe77"
              target="_blank"
              rel="noreferrer  noopener"
            >
              <AiOutlineTwitter />
            </a>
            <span className={`${style.linkBorder}`} />
          </li>
        </ul>
        <div>
          <div className={style.themeSwitch}>
            <Switch />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  theme: PropTypes.string,
};

Header.defaultProp = {
  theme: 'dark',
};
