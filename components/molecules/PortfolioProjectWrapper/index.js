import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Project from '../Project';
import style from './portfolioProjectsWrapper.module.scss';

const PortfolioProjectsWrapper = ({ projects, isDarkTheme }) => (
  <motion.section className={style.projectsWrapper}>
    <AnimatePresence>
      <h1>What I've Been Doing</h1>
      <div>
        click on the icon to filter <span>🎈🧨🎗🎟🎏</span>
      </div>
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

export default PortfolioProjectsWrapper;

PortfolioProjectsWrapper.propTypes = {
  projects: PropTypes.array,
  isDarkTheme: PropTypes.bool,
};