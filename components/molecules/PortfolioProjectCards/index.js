import Image from 'next/image';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import style from './portfolioProjectCards.module.css';

const PortfolioProjectCards = (props) => {
  const { project } = props;
  const { title, imgName, description, liveUrl, technologies, ghUrl } = project;
  const { isDarkTheme } = props;
  const theme = isDarkTheme ? style.dark : style.light;

  return (
    <article className={`${style.card} ${theme}`}>
      <div className={style.title}>
        <Title primary>{title}</Title>
        {description}
      </div>
      <div className={style.imageWrapper}>
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
      </div>
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
    </article>
  );
};

export default PortfolioProjectCards;

PortfolioProjectCards.propTypes = {
  isDarkTheme: PropTypes.bool,
  project: PropTypes.shape({
    title: PropTypes.string,
    imgName: PropTypes.string,
    description: PropTypes.string,
    liveUrl: PropTypes.string,
    ghUrl: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
};
