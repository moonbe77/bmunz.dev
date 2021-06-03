import React, { useState, useEffect } from 'react';
import disableScroll from 'disable-scroll';
import { useRouter } from 'next/router';
import { motion, useCycle } from 'framer-motion';
import Link from 'next/link';
import { useStateContext, useStateDispatch } from '../../../store/store';

import style from './SideNavbar.module.css';

export default function SideNavbar() {
  const { isDarkTheme, showSideMenu, menu } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const Router = useRouter();
  const dispatch = useStateDispatch();
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    if (showSideMenu) {
      disableScroll.on();
      toggleOpen(1);
    } else {
      disableScroll.off();
      toggleOpen(0);
    }
  }, [showSideMenu]);

  const sidebar = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        stiffness: 400,
        damping: 40,
        restDelta: 2,
      },
    },
    closed: {
      opacity: 0,
      x: 450,
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const list = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const item = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100, delay: 0.5 },
      },
    },
    closed: {
      x: -10,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  useEffect(() => {
    // this is to close the menu in every change of route
    if (showSideMenu) {
      dispatch({
        type: 'TOGGLE_SIDE_MENU',
        payload: !showSideMenu,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Router]);

  return (
    <motion.nav
      animate={isOpen ? 'open' : 'closed'}
      initial={false}
      variants={sidebar}
      className={`${style.wrapper} ${theme} `}
    >
      <motion.div className={style.menu}>
        <motion.ul variants={list}>
          {menu.map((menuItem, index) => (
            <motion.li
              custom={index}
              variants={item}
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={menuItem.link}>
                <a target={menuItem.target}>
                  {menuItem.icon}
                  {menuItem.textMobile}
                </a>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
}
