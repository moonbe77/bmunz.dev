import Image from 'next/image';
import PropTypes from 'prop-types';
import { motion, useCycle } from 'framer-motion';
import Button from '../../atoms/Button';
import style from './project.module.scss';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const Project = (props) => {
  const [animateCard, setAnimateCard] = useCycle(false, true);

  const { project, isDarkTheme } = props;
  const { title, subTitle, imgName, description, liveUrl, ghUrl } = project;
  const theme = isDarkTheme ? style.dark : style.light;

  const imageVariant = {
    open: {
      // opacity: 0.05,
      // x: 400,
      scale: 1,
    },
    close: {
      // opacity: 1,
      // x: 0,
      scale: 0.8,
    },
  };

  const infoVariant = {
    open: {
      opacity: 1,
      x: 0,
    },
    close: {
      opacity: 0,
      x: -400,
    },
  };

  return (
    <motion.article
      className={`${style.card} ${theme}`}
      onClick={() => {
        setAnimateCard((prev) => !prev);
      }}
      onHoverStart={() => {
        setAnimateCard(1); // open
      }}
      onHoverEnd={() => {
        setAnimateCard(0); // close
      }}
    >
      <motion.div
        className={style.imageWrapper}
        variants={imageVariant}
        animate={animateCard ? 'open' : 'close'}
      >
        <Image
          className={style.image}
          src={`/figma/projects_mockups/${imgName}`}
          alt={title}
          layout="fill"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          // width="300"
          // height="200"
          objectFit="scale-down"
          priority
        />
      </motion.div>
      <motion.div
        // animate={animateCard ? 'open' : 'close'}
        // variants={infoVariant}
        className={style.infoWrapper}
      >
        <div className={`${style.header}`}>
          <div className={style.title}>{title}</div>
          <div className={style.subTitle}>{subTitle}</div>
        </div>
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
      </motion.div>
    </motion.article>
  );
};

export default Project;

Project.propTypes = {
  project: PropTypes.object,
  isDarkTheme: PropTypes.bool,
};
