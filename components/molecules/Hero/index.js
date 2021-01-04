import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import Image from 'next/image';
import { TiArrowDownOutline } from 'react-icons/ti';
import style from './Hero.module.css';

const Hero = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 2}px,${y / 10}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <>
      <section className={style.hero}>
        <Image src="/hero_background.jpg" layout="fill" objectFit="cover" />
        <animated.div style={fade}>
          <div
            className={style.content}
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xy: calc(x, y) })
            }
            onMouseLeave={() => set({ xy: [0, 0] })}
          >
            <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
              <h1 className={style.firstLine}>HEY! I'm Bernardo </h1>
            </animated.div>
            <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
              <div className={style.secondLine}>
                {' '}
                a Web developer looking for job
              </div>
            </animated.div>
            <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
              <div className={style.heroButton}>
                {' '}
                <Link href="/portfolio">Check my Portfolio</Link>{' '}
              </div>
            </animated.div>
          </div>
        </animated.div>
        <div className={style.arrowDown}>
          <TiArrowDownOutline />
        </div>
      </section>
    </>
  );
};

export default Hero;
