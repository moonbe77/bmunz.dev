import { useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import Button from '../../atoms/Button';
import style from './portfolioProjectCards.module.css';

const PortfolioProjectCards = (props) => {
  const [isHover, setIsHover] = useState(false);
  const { project } = props;
  const { title, imgName, description, liveUrl, technologies, ghUrl } = project;
  const { isDarkTheme } = props;
  const theme = isDarkTheme ? style.dark : style.light;

  const opacity = useSpring({ opacity: 1, from: { opacity: 0 } });
  const move = (x, y) => `translate3D(${x}px,${y}px,0)`;
  const fadeOut = useSpring({
    opacity: isHover ? `0.3` : `1`,
    config: {
      tension: 170,
      friction: 27,
      duration: 300,
    },
  });

  useEffect(() => {
    console.log(isHover);
  }, [isHover]);

  const [settings, setSettings] = useSpring(() => ({
    xy: [-150, 0],
    opacity: 1,
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <animated.article
      style={opacity}
      className={`${style.card} ${theme}`}
      onMouseEnter={() => {
        setIsHover(true);
        setSettings({ xy: [0, 0] });
      }}
      onMouseLeave={() => {
        setIsHover(false);
        setSettings({ xy: [-150, 0] });
      }}
    >
      <div className={`${style.header}`}>
        <div className={style.title}>{title}</div>
        <animated.div
          style={{ transform: settings.xy.interpolate(move) }}
          className={style.subTitle}
        >
          {description}
        </animated.div>
      </div>

      <animated.div className={style.imageWrapper} style={fadeOut}>
        <Image
          className={style.image}
          src={`/figma/projects_mockups/${imgName}`}
          alt={title}
          layout="responsive"
          width="300"
          height="200"
          objectFit="scale-down"
          priority
        />
      </animated.div>
      <div className={style.infoWrapper}>
        <div className={style.tecList}>
          {technologies &&
            technologies
              .sort((a, b) => a.length - b.length)
              .map((item, i) => <span key={i}>{item}</span>)}
        </div>
        <div>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button primary size="medium">
              check it out
            </Button>
          </a>
          {ghUrl && (
            <a href={ghUrl} target="_blank" rel="noopener noreferrer">
              <Button primary size="medium">
                GitHub
              </Button>
            </a>
          )}
        </div>
      </div>
    </animated.article>
  );
};

export default PortfolioProjectCards;
