import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import { TiArrowDownOutline } from 'react-icons/ti';
import { useStateContext } from '../../../store/store';
import style from './Hero.module.css';
import Button from '../../atoms/Button';

const Hero = () => {
  const { isDarkTheme } = useStateContext();
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  const theme = isDarkTheme ? style.dark : style.light;
  const background = isDarkTheme
    ? style.heroBackgroundDark
    : style.heroBackgroundLight;

  const calc = (x, y) => {
    console.log(x, y);
    return [x - window.innerWidth / 2, y - window.innerHeight / 2];
  };
  const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 10}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 18}px,${y / 6}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 15}px,${y / 10}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <section
      className={`${style.hero} ${background}`}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      onMouseLeave={() => set({ xy: [0, 0] })}
    >
      <animated.div style={fade}>
        <div className={`${style.content}`}>
          <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
            <h1 className={`${style.firstLine} ${theme}`}>HEY! I'm Bernardo</h1>
          </animated.div>
          <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
            <div className={`${style.secondLine} ${theme}`}>
              a Web developer looking for job
            </div>
          </animated.div>
          <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
            <div className={style.heroButton}>
              <Button primary size="large">
                <Link href="/portfolio">Check my Portfolio</Link>{' '}
              </Button>
            </div>
          </animated.div>
        </div>
      </animated.div>
      <div className={style.arrowBottomHero}>
        <div className={style.arrowAnimation}>
          <TiArrowDownOutline />
        </div>
      </div>
    </section>
  );
};

export default Hero;
