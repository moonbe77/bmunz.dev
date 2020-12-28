import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types';
import { useStateContext } from '../../../store/store';
import style from './header.module.css';
import Switch from '../../atoms/Switch';



const Header = (props) => {
  const state = useStateContext()
  const theme = state.isDarkTheme ? style.dark : style.light;
  const router = useRouter()

  const active = {
    transform: 'scaleX(0)'
  }


  // useEffect(() => {
  //   const links = document.getElementsByTagName('a')
  //   console.log(links);
  //   // links.forEach(link => {
  //   //   console.log(link);
  //   //   if (link.pathname === router.pathname) {
  //   //     console.log(link.pathname === router.pathname);
  //   //     link.style.visibility = 'visible'
  //   //     link.style.transform = 'scaleX(1)'
  //   //   }
  //   // });
  // }, [router.pathname])

  return (
    <header className={`${style.header} ${theme}`}>
      <nav className={style.nav}>
        <div id={style.logo}>
          <Link href='/' ><a> BM Dev</a></Link>
        </div>
        <ul className={style.menu}>
          <li className={`${style.links} `}>
            <Link href='/portfolio' >
              <a>PORTFOLIO </a>
            </Link>
            <span className={`linkBorder ${style.linkBorder}`}></span>
          </li>
          <li className={` ${style.links} `} >
            <a href='https://github.com/moonbe77' target='_blank'
              rel='noreferrer  noopener'>GITHUB</a>
            <span className={`${style.linkBorder}`}></span>
          </li>
          <li className={` ${style.links}`}>
            <a
              href='https://www.linkedin.com/in/munzbe/'
              target='_blank'
              rel='noreferrer  noopener'
            >
              LINKEDIN
              </a>
            <span className={`${style.linkBorder}`}></span>
          </li>
          <li className={`${style.links} `}>
            <a href='https://twitter.com/moonbe77' target='_blank'
              rel='noreferrer  noopener'>TWITTER</a>
            <span className={`${style.linkBorder}`}></span>
          </li>
        </ul>
        <div>
          <Switch />
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
