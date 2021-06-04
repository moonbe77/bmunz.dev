import Image from 'next/image';
import PropTypes from 'prop-types';
import { motion, useCycle } from 'framer-motion';
import Button from '../../atoms/Button';
import style from './portfolioProjectCard.module.css';

const PortfolioProjectCard = (props) => {
  const [animateCard, setAnimateCard] = useCycle(false, true);

  const { project, isDarkTheme } = props;
  const { title, subTitle, imgName, description, liveUrl, ghUrl } = project;
  const theme = isDarkTheme ? style.dark : style.light;

  const imageVariant = {
    open: {
      opacity: 0.05,
      x: 400,
    },
    close: {
      opacity: 1,
      x: 0,
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
      <div className={`${style.header}`}>
        <div className={style.title}>{title}</div>
        <motion.div
          animate={{
            x: 0,
          }}
          initial={{ x: -200 }}
          className={style.subTitle}
        >
          {subTitle}
        </motion.div>
      </div>

      <motion.div
        className={style.imageWrapper}
        variants={imageVariant}
        animate={animateCard ? 'open' : 'close'}
      >
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
      </motion.div>
      <motion.div
        animate={animateCard ? 'open' : 'close'}
        variants={infoVariant}
        className={style.infoWrapper}
      >
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

export default PortfolioProjectCard;

PortfolioProjectCard.propTypes = {
  project: PropTypes.object,
  isDarkTheme: PropTypes.bool,
};
