import PropTypes from 'prop-types';
import Project from '../Project';
import style from './portfolioProjectsWrapper.module.scss';

const PortfolioProjectsWrapper = ({ projects, isDarkTheme }) => {
  return (
    <section className={style.projectsWrapper}>
      <h1>What I've Been Doing</h1>
      <div>
        {projects.map((project) => {
          return (
            <Project
              key={`project-${project.id}`}
              project={project}
              isDarkTheme={isDarkTheme}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioProjectsWrapper;

PortfolioProjectsWrapper.propTypes = {
  projects: PropTypes.array,
  isDarkTheme: PropTypes.bool,
};
