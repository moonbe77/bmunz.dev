import Image from 'next/image';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import style from './portfolioProject.module.scss';

const SectionObserved = dynamic(() => import('../../atoms/SectionObserved'), {
  ssr: false,
});

const PortfolioProjectFullWidth = (props) => {
  const { project } = props;
  const { title, imgName, description, liveUrl, technologies, ghUrl } = project;
  const { isDarkTheme } = props;
  const theme = isDarkTheme ? style.dark : style.light;
  const colorBigText = isDarkTheme ? style.bigTextDark : style.bigTextLight;

  return (
    <SectionObserved>
      <div className={`${style.content} ${theme}`}>
        <div className={`${style.bigText} ${colorBigText} `}>
          {title.split('').map((letter, i) => (
            <span key={letter + i}>{letter}</span>
          ))}
        </div>
        <div className={style.imageWrapper}>
          <Image
            className={style.image}
            src={`/figma/projects_mockups/${imgName}`}
            alt={title}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className={style.infoWrapper}>
          <div>
            <Title primary>{title}</Title>
            <p>{description}</p>
          </div>
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
                <Button size="medium" primary>
                  GitHub
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </SectionObserved>
  );
};

export default PortfolioProjectFullWidth;

PortfolioProjectFullWidth.propTypes = {
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
