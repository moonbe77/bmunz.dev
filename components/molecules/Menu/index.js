import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, useCycle } from 'framer-motion';
import { useStateContext } from '../../../store/store';
import styles from './Menu.module.scss';

const dropdown = {
  hidden: {
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  show: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
};

export default function Menu() {
  const [showDropdown, setShowDropdown] = useCycle(false, true);
  const { menu } = useStateContext();
  // const router = useRouter();

  // useEffect(() => {
  //   const links = document.querySelectorAll('.link');
  //   links.forEach((link) => {
  //     const border = link.nextSibling;
  //     if (link.pathname === router.pathname) {
  //       border.style.transform = 'scaleX(1)';
  //     } else {
  //       border.style.removeProperty('transform');
  //       border.style.transform = 'null';
  //     }
  //   });
  // }, [router]);

  // const handleDropdown = (e, state) => {
  //   console.log(e.target);
  //   setShowDropdown(state);
  // };

  return (
    <ul className={styles.menu}>
      {menu.map((item) => {
        if (item.type === 'dropdown') {
          return (
            <motion.li
              className={`${styles.links}`}
              animate={showDropdown ? 'show' : 'hidden'}
              key={item.id}
              onHoverStart={() => setShowDropdown(1)}
              onHoverEnd={() => setShowDropdown(0)}
            >
              {item.text}
              <motion.ul variants={dropdown} className={styles.dropdown}>
                <DropdownItems items={item.dropdownItems} />
              </motion.ul>
            </motion.li>
          );
        }

        return (
          <motion.li
            key={item.id}
            className={`${styles.links}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={item.link}>
              <a className="link" target={item?.linkAttributes?.target}>
                {item.textDesktop}
              </a>
            </Link>
            <span className={`${styles.linkBorder}`} />
          </motion.li>
        );
      })}
    </ul>
  );
}

function DropdownItems({ items }) {
  return [...items].map((item) => (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      key={item.id}
      className={`${styles.dropdownItem}`}
    >
      <Link href={item.link}>
        <a
          target={item.linkAttributes.target}
          title={item.linkAttributes.title}
        >
          {item.textDesktop}
        </a>
      </Link>
    </motion.li>
  ));
}
