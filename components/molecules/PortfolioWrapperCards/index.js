import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import PortfolioProjectCard from '../PortfolioProjectCard';
import style from './portfolioWrapperCards.module.css';

const PortfolioWrapperCards = ({ projects, isDarkTheme }) => (
  <motion.section className={style.cardsWrapper}>
    <AnimatePresence>
      {projects.map((project, i) => (
        <PortfolioProjectCard
          key={project.id}
          project={project}
          isDarkTheme={isDarkTheme}
        />
      ))}
    </AnimatePresence>
  </motion.section>
);

export default PortfolioWrapperCards;
PortfolioWrapperCards.propTypes = {
  projects: PropTypes.array,
  isDarkTheme: PropTypes.bool,
};
