/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useStateContext, useStateDispatch } from '../../../store/store';
import style from './Menu.module.css';

export default function Menu() {
  const { menu } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    const links = document.querySelectorAll('.link');
    links.forEach((link) => {
      const border = link.nextSibling;
      if (link.pathname === router.pathname) {
        border.style.transform = 'scaleX(1)';
      } else {
        border.style.removeProperty('transform');
        border.style.transform = 'null';
      }
    });
  }, [router]);

  return (
    <ul className={style.menu}>
      {menu.map((item, index) => (
        <li key={index} className={`${style.links}`}>
          <Link href={item.link}>
            <a className="link" target={item.target}>
              {item.textDesktop}
            </a>
          </Link>
          <span className={`${style.linkBorder}`} />
        </li>
      ))}
    </ul>
  );
}
