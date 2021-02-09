import PropTypes from 'prop-types';
import PortfolioProjectCards from '../PortfolioProjectCards';
import style from './portfolioWrapperCards.module.css';

const PortfolioWrapperCards = ({ projects, isDarkTheme }) => (
  <section className={style.cardsWrapper}>
    {projects.map((project, i) => (
      <PortfolioProjectCards
        key={i}
        project={project}
        isDarkTheme={isDarkTheme}
      />
    ))}
  </section>
);

export default PortfolioWrapperCards;
PortfolioWrapperCards.propTypes = {
  projects: PropTypes.array,
  isDarkTheme: PropTypes.bool,
};
