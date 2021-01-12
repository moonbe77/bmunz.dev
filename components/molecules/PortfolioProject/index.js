import Image from 'next/image';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import SectionWithBackground from '../../atoms/SectionWithBackground';
import style from './portfolioProject.module.css';

const PortfolioProject = (props) => {
  const { project } = props;
  const { title, imgName, description, liveUrl, technologies } = project;
  const { isDarkTheme } = props;
  const theme = isDarkTheme ? style.dark : style.light;
  const colorBigText = isDarkTheme ? style.bigTextDark : style.bigTextLight;

  return (
    <SectionWithBackground>
      <div className={`${style.content} ${theme}`}>
        <div className={`${style.bigText} ${colorBigText} `}>
          {title.split('').map((letter) => (
            <span>{letter}</span>
          ))}
        </div>
        <div className={style.imageWrapper}>
          <Image
            className={style.image}
            src={`/figma/projects_mockups/${imgName}`}
            alt={title}
            width={450}
            height={291}
            layout="responsive"
          />
        </div>
        <div className={style.infoWrapper}>
          <div className="px-4 mt-5">
            <Title>{title}</Title>
            <p className="text-grey-darker text-base text-gray-400">
              {description}
            </p>
          </div>
          <div className={style.tecList}>
            {technologies &&
              technologies.map((item, index) => (
                <span className="" key={index}>
                  #{item}
                </span>
              ))}
          </div>
          <div className="border border-red-600 text-center relative min-h-200">
            <a
              className="block m-5 p-2 absolute bottom-0"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button primary size="medium" label="check it out" />
            </a>
          </div>
        </div>
      </div>
    </SectionWithBackground>
  );
};

export default PortfolioProject;

PortfolioProject.propTypes = {
  isDarkTheme: PropTypes.bool,
  project: PropTypes.shape({
    title: PropTypes.string,
    imgName: PropTypes.string,
    description: PropTypes.string,
    liveUrl: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
};
