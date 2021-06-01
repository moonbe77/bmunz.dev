import React, { useState, useEffect } from 'react';
import disableScroll from 'disable-scroll';
import { useRouter } from 'next/router';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useStateContext, useStateDispatch } from '../../../store/store';

import style from './SideNavbar.module.css';

// function Trail({ children }) {
//   const items = React.Children.toArray(children);

//   return (
//     <>
//       <motion.ul animate={{ x: -100 }}>
//         {items.map((item) => {
//           <motion.li key={item.id} animate={{ opacity: 1 }}>
//             {item}
//           </motion.li>;
//         })}
//       </motion.ul>
//     </>
//   );
// }

export default function SideNavbar() {
  const { isDarkTheme, showSideMenu, menu } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const Router = useRouter();
  const dispatch = useStateDispatch();

  useEffect(() => {
    if (showSideMenu) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [showSideMenu]);

  const controls = useAnimation();
  const list = {
    hidden: { opacity: showSideMenu ? 1 : 0, transition: { delay: 0.8 } },
  };
  const item = { hidden: { opacity: 1, transition: { delay: 0.2 } } };

  useEffect(() => {
    controls.start((i) => ({
      opacity: showSideMenu ? 1 : 0,
      transition: { delay: 0.3 },
    }));
  }, [showSideMenu, controls]);

  useEffect(() => {
    if (showSideMenu) {
      dispatch({
        type: 'TOGGLE_SIDE_MENU',
        payload: !showSideMenu,
      });
    }
  }, [Router]);

  return (
    <motion.nav animate={controls} className={`${style.wrapper} ${theme} `}>
      <div className={style.menu}>
        <motion.ul animate="hidden" variants={list}>
          {menu.map((menuItem, index) => (
            <motion.li custom={index} variants={item}>
              <Link key={index} href={menuItem.link}>
                <a target={menuItem.target}>
                  {menuItem.icon}
                  {menuItem.textMobile}
                </a>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
}
