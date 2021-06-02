// Burger.js
import { useEffect } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import style from './Burger.module.css';

const Burger = ({ isDarkTheme, showSideMenu, handleSideMenu }) => {
  const theme = isDarkTheme ? style.dark : style.light;

  const controls = useAnimation();
  useEffect(() => {
    controls.start((i) => {
      if (i === 0) {
        return {
          opacity: 1,
          rotate: showSideMenu ? -45 : 0,
          y: showSideMenu ? 11 : 0,
          origin: 'center',
          transition: { delay: 0.3 },
        };
      }
      if (i === 2) {
        return {
          opacity: 1,
          rotate: showSideMenu ? 45 : 0,
          y: showSideMenu ? -11 : 0,
          origin: 'center',
          transition: { delay: 0.3 },
        };
      }
      return {
        opacity: showSideMenu ? 0 : 1,
        transition: showSideMenu ? { delay: 0 } : { delay: 0.3 },
      };
    });
  }, [showSideMenu, controls]);

  const handleKeyDown = (e) => {
    console.log(e.target);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={style.burger}
        role="switch"
        aria-checked={showSideMenu}
        onClick={handleSideMenu}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        data-testid="burger"
      >
        <motion.div
          custom={0}
          animate={controls}
          className={`${style.line} ${theme}`}
        />
        <motion.div
          custom={1}
          animate={controls}
          className={`${style.line} ${theme}`}
        />
        <motion.div
          custom={2}
          animate={controls}
          className={`${style.line} ${theme}`}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Burger;

Burger.propTypes = {
  isDarkTheme: PropTypes.bool,
  showSideMenu: PropTypes.bool,
  handleSideMenu: PropTypes.func,
};
