/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useStateContext } from '../../../store/store';
import styles from './Menu.module.scss';

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
    <ul className={styles.menu}>
      {menu.map((item, index) => {
        console.log(item);
        if (item.type === 'dropdown') {
          return (
            <li className={styles.dropdown}>
              {item.text}
              <ul>
                {item.items.map((item, index) => {
                  <li>
                    <li key={index} className={`${styles.links}`}>
                      <Link href={item.link}>
                        <a className="link" target={item.target}>
                          {item.textDesktop}
                        </a>
                      </Link>
                      <span className={`${styles.linkBorder}`} />
                    </li>
                  </li>;
                })}
              </ul>
            </li>
          );
        }

        return (
          <li key={index} className={`${styles.links}`}>
            <Link href={item.link}>
              <a className="link" target={item.target}>
                {item.textDesktop}
              </a>
            </Link>
            <span className={`${styles.linkBorder}`} />
          </li>
        );
      })}
    </ul>
  );
}
