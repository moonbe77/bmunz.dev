import React, { useState, useEffect } from 'react';
import disableScroll from 'disable-scroll';
import { useSpring, useTrail, animated, config } from 'react-spring';
import Link from 'next/link';
import { useStateContext } from '../../../store/store';
import style from './SideNavbar.module.css';

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 200,
    height: open ? 50 : 0,
    delay: 150,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.ul
          key={index}
          className={style.what}
          style={{
            ...rest,
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
          }}
        >
          <animated.li style={{ height }}>{items[index]}</animated.li>
        </animated.ul>
      ))}
    </>
  );
}

export default function SideNavbar() {
  const [show, setShow] = useState(false);
  const { isDarkTheme, showSideMenu } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;

  const slide = useSpring({
    transform: show ? 'translateX(0vw)' : 'translateX(100vw)',
    config: config.stiff,
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

  return (
    <animated.div style={slide} className={`${style.wrapper} ${theme} `}>
      <div className={style.menu}>
        <Trail open={show} >
          {navItems.map((item, index) => (
            <Link key={index} href={item.link} onClick={() => setShow(false)}>
              {item.text}
            </Link>
          ))}
        </Trail>
      </div>
    </animated.div>
  );
}
