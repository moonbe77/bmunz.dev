// import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import { motion, motionValue } from 'framer-motion';
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
  const x = motionValue(0);
  const y = motionValue(0);

  const calcMousePosition = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];

  const setPosition = (mouseX, mouseY) => {
    const [mX, mY] = calcMousePosition(mouseX, mouseY);
    x.set(mX);
    y.set(mY);
  };

  // const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 10}px,0)`;
  // const trans2 = (x, y) => `translate3d(${x / 18}px,${y / 6}px,0)`;
  // const trans3 = (x, y) => `translate3d(${x / 15}px,${y / 10}px,0)`;

  // const [props, set] = useSpring(() => ({
  //   xy: [0, 0],
  //   config: { mass: 10, tension: 550, friction: 140 },
  // }));

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className={`${style.hero} ${background}`}
      onMouseMove={({ clientX: mouseX, clientY: mouseY }) =>
        setPosition(mouseX, mouseY)
      }
      onMouseLeave={resetPosition}
    >
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <div className={`${style.content}`}>
          <motion.div style={{ x, y }}>
            <h1 className={`${style.firstLine} ${theme}`}>
              Hey! I'm Bernardo
              <span>Frontend Web Developer</span>
            </h1>
          </motion.div>
          <motion.div>
            <h2 className={`${style.secondLine} ${theme}`}>
              Looking for a position as junior frontend in sydney, au.
            </h2>
          </motion.div>
          <motion.div>
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
