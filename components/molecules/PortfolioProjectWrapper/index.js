import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Project from '../Project';
import style from './portfolioProjectsWrapper.module.scss';

const PortfolioProjectsWrapper = ({ projects, isDarkTheme }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.section className={style.projectsWrapper}>
      <AnimatePresence>
        <h1>What I've Been Doing</h1>
        {/* <div>
          click on the icon to filter <span>🎈🧨🎗🎟🎏</span>
        </div> */}
        <div>
          {projects.map((project, i) => (
            <Project
              key={project.id}
              project={project}
              isDarkTheme={isDarkTheme}
            />
          ))}
        </div>
      </AnimatePresence>
    </motion.section>
  );
};

export default PortfolioProjectsWrapper;

PortfolioProjectsWrapper.propTypes = {
  projects: PropTypes.array,
  isDarkTheme: PropTypes.bool,
};
