import React, { useState, useEffect } from 'react';
import disableScroll from 'disable-scroll';
import { useRouter } from 'next/router';
// import { useSpring, useTrail, animated } from 'react-spring';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useStateContext, useStateDispatch } from '../../../store/store';

import style from './SideNavbar.module.css';

function Trail({ children }) {
  const items = React.Children.toArray(children);
  // const trail = useTrail(items.length, {
  //   config: { mass: 5, tension: 2000, friction: 200 },
  //   opacity: open ? 1 : 0,
  //   x: open ? 0 : 200,
  //   height: open ? 50 : 0,
  //   delay: open ? 150 : 0,
  //   from: { opacity: 0, x: -200, height: 0 },
  // });

  return (
    <>
      <motion.ul animate={{ x: -100 }}>
        {items.map((item) => {
          <motion.li key={item.id} animate={{ opacity: 1 }}>
            {item}
          </motion.li>;
        })}
      </motion.ul>
    </>
  );
}

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

  useEffect(() => {
    if (showSideMenu) {
      dispatch({
        type: 'TOGGLE_SIDE_MENU',
        payload: !showSideMenu,
      });
    }
  }, [Router]);

  return (
    <motion.div  className={`${style.wrapper} ${theme} `}>
      <div className={style.menu}>
        <Trail open={showSideMenu}>
          {menu.map((item, index) => (
            <Link key={index} href={item.link}>
              <a target={item.target}>
                {item.icon}
                {item.textMobile}
              </a>
            </Link>
          ))}
        </Trail>
      </div>
    </motion.div>
  );
}
