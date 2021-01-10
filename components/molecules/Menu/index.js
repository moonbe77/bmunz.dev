import Link from 'next/link';
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineSend,
} from 'react-icons/ai';
import { useStateContext, useStateDispatch } from '../../../store/store';
import Switch from '../../atoms/Switch';
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
        <Link href="/portfolio">
          <a className="link">PORTFOLIO </a>
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
          <AiOutlineSend />
        </a>
        <span className={`${style.linkBorder} `} />
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
      <li className={`${style.links}`}>
        <Switch />
      </li>
    </ul>
  );
}
