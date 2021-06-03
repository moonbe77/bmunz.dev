import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useSpring, useTransform } from 'framer-motion';
import { TiArrowDownOutline } from 'react-icons/ti';
import Button from '../../atoms/Button';
import { useStateContext } from '../../../store/store';
import style from './Hero.module.css';

function Hero() {
  const { isDarkTheme } = useStateContext();
  const theme = isDarkTheme ? style.dark : style.light;
  const background = isDarkTheme
    ? style.heroBackgroundDark
    : style.heroBackgroundLight;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mousePositionHandler = (mouseX, mouseY) => {
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const followMouseX = useSpring(0, { stiffness: 200, damping: 15 });
  const followMouseY = useSpring(0, { stiffness: 100, damping: 10 });

  const smoother = (value, factor) => {
    if (mousePosition.x === 0) {
      return 0;
    }
    return value / factor;
  };

  const heroBigX = useTransform(followMouseX, (value) => smoother(value, 10));
  const heroBigY = useTransform(followMouseY, (value) => smoother(value, 10));
  const heroMediumX = useTransform(followMouseX, (value) =>
    smoother(value, 18)
  );
  const heroMediumY = useTransform(followMouseY, (value) => smoother(value, 6));
  const heroButtonX = useTransform(followMouseX, (value) =>
    smoother(value, 25)
  );
  const heroButtonY = useTransform(followMouseY, (value) =>
    smoother(value, 15)
  );

  useEffect(() => {
    const { x, y } = mousePosition;

    followMouseX.set(x - window.innerWidth / 2);
    followMouseY.set(y - window.innerHeight / 2);
  }, [mousePosition, followMouseX, followMouseY]);

  const resetPosition = () => {
    followMouseX.set(0);
    followMouseY.set(0);
  };

  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className={`${style.hero} ${background}`}
      onMouseMove={({ clientX: mouseX, clientY: mouseY }) =>
        mousePositionHandler(mouseX, mouseY)
      }
      onMouseLeave={resetPosition}
    >
      <div>
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
      </div>
      <div className={style.arrowBottomHero}>
        <div className={style.arrowAnimation}>
          <TiArrowDownOutline />
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
