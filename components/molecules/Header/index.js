import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types';
import { useStateContext } from '../../../store/store';
import Switch from '../../atoms/Switch';
import {AiOutlineTwitter,AiOutlineGithub,AiOutlineLinkedin} from 'react-icons/ai'
import style from './header.module.css';

const LinkWrapper = ({href,children})=>{
  return <Link href={href}>{children}</Link>
}

const Header = (props) => {
  const state = useStateContext()
  const theme = state.isDarkTheme ? style.dark : style.light;
  const router = useRouter()

  useEffect(() => {
    const links = document.querySelectorAll('.link')
    links.forEach(link => {
      const border = link.nextSibling
      if (link.pathname === router.pathname) {
        console.log(link.pathname === router.pathname);
        border.style.transform="scaleX(1)"
      }else{
        console.log(link.pathname === router.pathname);
        border.style.removeProperty('transform')
        border.style.transform="null"
      }
    });
  }, [router])

  return (
    <header className={`${style.header} ${theme}`}>
      <nav className={style.nav}>
        <div id={style.logo}>
          <Link href='/' ><a> BM Dev</a></Link>
        </div>
        <ul className={style.menu}>
          <li className={`${style.links} `}>
            <Link href='/portfolio' >
              <a className='link'>PORTFOLIO </a>
            </Link>
            <span className={`${style.linkBorder} ${style.active}`}></span>
          </li>
          <li className={` ${style.links} `} >
            <a href='https://github.com/moonbe77' target='_blank'
              rel='noreferrer  noopener'><AiOutlineGithub/></a>
            <span className={`${style.linkBorder} `}></span>
          </li>
          <li className={` ${style.links}`}>
            <a
              href='https://www.linkedin.com/in/munzbe/'
              target='_blank'
              rel='noreferrer  noopener'
            >
              <AiOutlineLinkedin/>
              </a>
            <span className={`${style.linkBorder}`}></span>
          </li>
          <li className={`${style.links} `}>
            <a href='https://twitter.com/moonbe77' target='_blank'
              rel='noreferrer  noopener'><AiOutlineTwitter/></a>
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
