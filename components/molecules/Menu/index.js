import Link from 'next/link';
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import style from './Menu.module.css';

export default function Menu() {
  return (
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
  );
}
