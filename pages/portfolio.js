import React from 'react';
import { useStateContext } from '../store/store';
import PortfolioCard from '../components/molecules/PortfolioCard';
import PortfolioProject from '../components/molecules/PortfolioProject';
import Title from '../components/atoms/Title';
import style from '../styles/portfolio.module.css';

// import 'aos/dist/aos.css';
const Portfolios = () => {
  const state = useStateContext();
  const { projects, isDarkTheme } = state;

  return (
    <>
      <div className={style.content}>
        <section className={style.wrapper}>
          {projects.map((project) => (
            <PortfolioProject
              key={project.id}
              project={project}
              isDarkTheme={isDarkTheme}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Portfolios;
