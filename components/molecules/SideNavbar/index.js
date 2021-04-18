import React, { useState, useEffect } from 'react';
import disableScroll from 'disable-scroll';
import { useRouter } from 'next/router';
import { useSpring, useTrail, animated } from 'react-spring';
import Link from 'next/link';
import { useStateContext, useStateDispatch } from '../../../store/store';

import style from './SideNavbar.module.css';

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 200,
    height: open ? 50 : 0,
    delay: open ? 150 : 0,
    from: { opacity: 0, x: -200, height: 0 },
  });

  return (
    <>
      <animated.ul>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.li
            key={index}
            style={{
              ...rest,
              height,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            {items[index]}
          </animated.li>
        ))}
      </animated.ul>
    </>
  );
}

export default function SideNavbar() {
  const { isDarkTheme, showSideMenu, menu } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const Router = useRouter();
  const dispatch = useStateDispatch();

  const slide = useSpring({
    transform: showSideMenu ? 'translateX(0vw)' : 'translateX(100vw)',
    opacity: 1,
    // from: {
    //   opacity: 0,
    // },
    delay: showSideMenu ? 0 : 500,
    config: { mass: 5, tension: 2000, friction: 200 },
  });

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
    <animated.div style={slide} className={`${style.wrapper} ${theme} `}>
      <div className={style.menu}>
        <Trail open={showSideMenu}>
          {menu.map((item, index) => (
            <Link key={index} href={item.link}>
              <a target={item.target}>
                {item.icon}{item.textMobile}
              </a>
            </Link>
          ))}
        </Trail>
      </div>
    </animated.div>
  );
}
