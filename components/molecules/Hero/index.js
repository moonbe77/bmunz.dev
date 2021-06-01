// import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import { motion, motionValue, useSpring, useTransform } from 'framer-motion';
import { TiArrowDownOutline } from 'react-icons/ti';
import { useEffect, useState } from 'react';
import Button from '../../atoms/Button';
import { useStateContext } from '../../../store/store';
import style from './Hero.module.css';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { isDarkTheme } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const background = isDarkTheme
    ? style.heroBackgroundDark
    : style.heroBackgroundLight;

  const followMouseX = useSpring(0, { stiffness: 200, damping: 15 });
  const followMouseY = useSpring(0, { stiffness: 100, damping: 10 });

  const heroBigX = useTransform(followMouseX, (value) => value / 20, {
    damping: 0,
  });
  const heroBigY = useTransform(followMouseY, (value) => value / 10);
  const heroMediumX = useTransform(followMouseX, (value) => value / 18);
  const heroMediumY = useTransform(followMouseY, (value) => value / 6);
  const heroButtonX = useTransform(followMouseX, (value) => value / 25);
  const heroButtonY = useTransform(followMouseY, (value) => value / 15);

  const mousePositionHandler = (mouseX, mouseY) => {
    setMousePosition({ x: mouseX, y: mouseY });
  };

  useEffect(() => {
    const { x, y } = mousePosition;
    console.log(window.innerWidth / 2);

    followMouseX.set(x - window.innerHeight / 2);
    followMouseY.set(y - window.innerHeight / 2);
  }, [mousePosition, followMouseX, followMouseY]);

  const resetPosition = () => {
    followMouseX.set(0);
    followMouseY.set(0);
  };

  return (
    <section
      className={`${style.hero} ${background}`}
      onMouseMove={({ clientX: mouseX, clientY: mouseY }) =>
        mousePositionHandler(mouseX, mouseY)
      }
      onMouseLeave={resetPosition}
    >
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <div className={`${style.content}`}>
          <motion.div style={{ x: heroBigX, y: heroBigY }}>
            <h1 className={`${style.firstLine} ${theme}`}>
              Hey! I'm Bernardo
              <span>Frontend Web Developer</span>
            </h1>
          </motion.div>
          <motion.div style={{ x: heroMediumX, y: heroMediumY }}>
            <h2 className={`${style.secondLine} ${theme}`}>
              Looking for a position as junior frontend in sydney, au.
            </h2>
          </motion.div>
          <motion.div style={{ x: heroButtonX, y: heroButtonY }}>
            <div className={style.heroButton}>
              <Button primary size="large" isDarkTheme={isDarkTheme}>
                <Link href="#footer_form">Contact Me</Link>{' '}
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className={style.arrowBottomHero}>
        <div className={style.arrowAnimation}>
          <TiArrowDownOutline />
        </div>
      </div>
    </section>
  );
}

export default Hero;
