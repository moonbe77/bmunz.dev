import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { useSwipeable } from 'react-swipeable';
import Button from '../../atoms/Button';
import style from './portfolioProjectCard.module.css';

const PortfolioProjectCard = (props) => {
  const card = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [cardDimensions, setCardDimensions] = useState(null);

  const { project } = props;
  const { title, subTitle, imgName, description, liveUrl, ghUrl } = project;
  const { isDarkTheme } = props;
  const theme = isDarkTheme ? style.dark : style.light;

  const swipeableConfig = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: true, // track mouse input
    rotationAngle: 0, // set a rotation angle
  };

  const { ref: swipe } = useSwipeable({
    // onSwiped: (eventData) => {    },
    onSwipedRight: () => setIsHover(true),
    onSwipedLeft: () => setIsHover(false),
    onTap: () => {
      setIsHover((prev) => !prev);
    },
    ...swipeableConfig,
  });

  useEffect(() => {
    swipe(card.current);
  }, [swipe]);

  const opacity = useSpring({ opacity: 1, from: { opacity: 0 } });
  const slideOut = useSpring({
    opacity: isHover ? 0.2 : 1,
    transform: isHover
      ? `translateX(${
          cardDimensions.width - (cardDimensions.width * 15) / 100
        }px)`
      : `translateX(0px)`,
    config: {
      tension: 130,
      friction: 27,
    },
  });
  const slideIn = useSpring({
    transform: isHover ? `translateX(0px)` : `translateX(-200px)`,
    opacity: isHover ? 1 : 0,
    config: {
      tension: 130,
      friction: 27,
    },
  });

  const touchSlideSettings = {
    reset: true,
    delay: 1000,
    from: {
      transform: isHover ? 'translateX(100px)' : 'translateX(-50px)',
      opacity: 1,
    },
    transform: isHover ? 'translateX(-50px)' : 'translateX(100px)',
    opacity: 0,
    config: {
      tension: 130,
      friction: 27,
    },
  };

  const [touchSlide, setTouchSlide, stop] = useSpring(() => ({
    ...touchSlideSettings,
  }));

  useEffect(() => {
    setCardDimensions(card.current.getBoundingClientRect());
  }, [isHover]);

  return (
    <animated.article
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...swipe}
      ref={card}
      style={opacity}
      className={`${style.card} ${theme}`}
      onClick={() => {
        setIsHover((prev) => !prev);
      }}
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
            <Button primary size="medium" isDarkTheme={isDarkTheme}>
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
      <animated.div className={style.touchHint} style={touchSlide}>
        <div className={style.circle} />
        <div className={style.slideEffect} />
      </animated.div>
    </animated.article>
  );
};

export default PortfolioProjectCard;
