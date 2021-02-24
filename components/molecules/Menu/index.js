/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { useStateContext, useStateDispatch } from '../../../store/store';
import style from './Menu.module.css';

export default function Menu() {
  const { showSideMenu } = useStateContext();
  const dispatch = useStateDispatch();

  const handleSideMenu = () => {
    dispatch({
      type: 'TOGGLE_SIDE_MENU',
      payload: !showSideMenu,
    });
  };
  return (
    <ul className={style.menu} onClick={handleSideMenu}>
      <li className={`${style.links}`}>
        <Link href="/projects">
          <a className="link">Projects </a>
        </Link>
        <span className={`${style.linkBorder} ${style.active}`} />
      </li>
      <li className={`${style.links}`}>
        <Link href="/#about">
          <a className="link">About Me </a>
        </Link>
        <span className={`${style.linkBorder} ${style.active}`} />
      </li>
      <li className={` ${style.links} `}>
        <a
          href="mailto:munzbe@gmail.com"
          rel="noreferrer  noopener"
          title="munzbe@gmail.com"
          alt=" email: munzbe@gmail.com"
        >
          <FaEnvelope />
        </a>
        <span className={`${style.linkBorder} `} />
      </li>
      <li className={` ${style.links} `}>
        <a
          href="https://github.com/moonbe77"
          target="_blank"
          rel="noreferrer  noopener"
        >
          <FaGithub />
        </a>
        <span className={`${style.linkBorder} `} />
      </li>
      <li className={` ${style.links}`}>
        <a
          href="https://www.linkedin.com/in/munzbe/"
          target="_blank"
          rel="noreferrer  noopener"
        >
          <FaLinkedinIn />
        </a>
        <span className={`${style.linkBorder}`} />
      </li>
      <li className={`${style.links} `}>
        <a
          href="https://twitter.com/moonbe77"
          target="_blank"
          rel="noreferrer  noopener"
        >
          <FaTwitter />
        </a>
        <span className={`${style.linkBorder}`} />
      </li>
    </ul>
  );
}
