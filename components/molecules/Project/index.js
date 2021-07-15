import Image from 'next/image';
import PropTypes from 'prop-types';
import { motion, useCycle, AnimateSharedLayout } from 'framer-motion';
import Button from '../../atoms/Button';
import TechnologyIcon from '../../atoms/TechnologyIcon';
import styles from './project.module.scss';

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
  const {
    title,
    subTitle,
    imgName,
    description,
    liveUrl,
    ghUrl,
    technologies,
  } = project;
  const theme = isDarkTheme ? styles.dark : styles.light;

  const imageVariant = {
    open: {
      // opacity: 0.05,
      // x: -10,
      scale: 1,
    },
    close: {
      // opacity: 1,
      // x: 0,
      scale: 0.95,
    },
  };

  const infoVariant = {
    open: {
      // opacity: 1,
      x: 10,
    },
    close: {
      // opacity: 0,
      x: -0,
    },
  };

  const techVariant = {
    open: {
      // x: -15,
      // scale: 1.1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    close: {
      // scale: 0.8,
      // x: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };
  const techItem = {
    open: { opacity: 1, x: -15, scale: 1.3 },
    close: { opacity: 0.5, x: 0, scale: 1 },
  };

  return (
    <motion.article
      className={`${styles.card} ${theme}`}
      onHoverStart={() => {
        setAnimateCard(1); // open
      }}
      onHoverEnd={() => {
        setAnimateCard(0); // close
      }}
    >
      <motion.div
        className={styles.imageWrapper}
        variants={imageVariant}
        animate={animateCard ? 'open' : 'close'}
        layout
        transition={{ duration: 0.2 }}
      >
        <Image
          className={styles.image}
          src={`/figma/projects_mockups/${imgName}`}
          alt={title}
          layout="fill"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          objectFit="contain"
          priority
        />
      </motion.div>
      <motion.div
        animate={animateCard ? 'open' : 'close'}
        variants={infoVariant}
        className={styles.infoWrapper}
      >
        <div className={`${styles.header}`}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subTitle}>{subTitle}</div>
        </div>
        <div className={styles.description}>{description}</div>
        <div>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button primary size="medium" isDarkTheme={isDarkTheme}>
              View
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
      <AnimateSharedLayout>
        <motion.div
          className={styles.technologies}
          animate={animateCard ? 'open' : 'close'}
          variants={techVariant}
          layout
        >
          {technologies.map((tech) => (
            <motion.div variants={techItem}>
              <TechnologyIcon tech={tech} />
            </motion.div>
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </motion.article>
  );
};

export default Project;
