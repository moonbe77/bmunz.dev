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
  const [show, setShow] = useState(false);
  const { isDarkTheme, showSideMenu } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const Router = useRouter();
  const dispatch = useStateDispatch();

  const slide = useSpring({
    transform: show ? 'translateX(0vw)' : 'translateX(100vw)',
    delay: show ? 0 : 500,
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  const navItems = [
    {
      text: 'Projects',
      link: '/projects',
      style: {
        opacity: 1,
      },
    },
    {
      text: 'About Me',
      link: '/#about',
      style: {
        opacity: 1,
      },
    },
    {
      text: 'github',
      link: '/github',
      style: {
        opacity: 1,
      },
    },
  ];

  useEffect(() => {
    console.log(showSideMenu);
    setShow(showSideMenu);
  }, [showSideMenu]);

  useEffect(() => {
    if (showSideMenu) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  });

  useEffect(() => {
    if (show) {
      dispatch({
        type: 'TOGGLE_SIDE_MENU',
        payload: !showSideMenu,
      });
    }
  }, [Router]);

  return (
    <animated.div style={slide} className={`${style.wrapper} ${theme} `}>
      <div className={style.menu}>
        <Trail open={show}>
          {navItems.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.text}
            </Link>
          ))}
        </Trail>
      </div>
    </animated.div>
  );
}
