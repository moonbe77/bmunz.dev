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

  const cardVariant = {
    open: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
    close: {
      opacity: 0,
    },
  };

  const imageVariant = {
    open: { scale: 1 },
    close: { scale: 0.95 },
  };

  const infoVariant = {
    open: { x: 10 },
    close: { x: -0 },
  };

  const techVariant = {
    open: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    close: {
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const techItem = {
    open: { opacity: 1, x: 0, scale: 1.3 },
    close: { opacity: 0.5, x: 0, scale: 1 },
  };

  return (
    <motion.article
      className={`${styles.card} ${theme}`}
      initial="close"
      animate="open"
      variants={cardVariant}
      onHoverStart={() => {
        setAnimateCard(1); // open
      }}
      onHoverEnd={() => {
        setAnimateCard(0); // close
      }}
      onTap={() => {
        setAnimateCard((prev) => (prev === 0 ? 1 : 0)); // close
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
            shimmer(200, 200)
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
          {technologies.map((tech, i) => {
            const techKey = `tech-${i}`;
            return (
              <motion.div
                key={techKey}
                variants={techItem}
                whileHover={{ rotate: 5 }}
              >
                <TechnologyIcon tech={tech} />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimateSharedLayout>
    </motion.article>
  );
};

export default Project;

Project.propTypes = {
  project: PropTypes.object,
  isDarkTheme: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  imgName: PropTypes.string,
  description: PropTypes.string,
  liveUrl: PropTypes.string,
  ghUrl: PropTypes.string,
  technologies: PropTypes.string,
};
