import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import Button from '../../atoms/Button';
import style from './portfolioProjectCards.module.css';

const PortfolioProjectCards = (props) => {
  const [isHover, setIsHover] = useState(false);
  const { project } = props;
  const { title, subTitle, imgName, description, liveUrl, ghUrl } = project;
  const { isDarkTheme } = props;
  const theme = isDarkTheme ? style.dark : style.light;

  const opacity = useSpring({ opacity: 1, from: { opacity: 0 } });
  const slideOut = useSpring({
    transform: isHover ? `translateX(400px)` : `translateX(0px)`,
    opacity: isHover ? 0.2 : 1,
    config: {
      tension: 280,
      friction: 100,
    },
  });
  const slideIn = useSpring({
    transform: isHover ? `translateX(0px)` : `translateX(-200px)`,
    config: {
      tension: 130,
      friction: 27,
    },
  });

  // useEffect(() => {}, [isHover]);

  return (
    <animated.article
      style={opacity}
      className={`${style.card} ${theme}`}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className={`${style.header}`}>
        <div className={style.title}>{title}</div>
        <animated.div style={slideIn} className={style.subTitle}>
          {subTitle}
        </animated.div>
      </div>

      <animated.div className={style.imageWrapper} style={slideOut}>
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
      <animated.div className={style.infoWrapper} style={slideIn}>
        <div className={style.description}>{description}</div>
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
      </animated.div>
    </animated.article>
  );
};

export default PortfolioProjectCards;

PortfolioProjectCards.propTypes = {
  isDarkTheme: PropTypes.bool,
  project: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    imgName: PropTypes.string,
    description: PropTypes.string,
    liveUrl: PropTypes.string,
    ghUrl: PropTypes.string,
    // technologies: PropTypes.arrayOf(PropTypes.string),
  }),
};
