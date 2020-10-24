import React from 'react';
import PortfolioCard from '../components/molecules/PortfolioCard';
import { useStateContext } from '../store/store';
import BoxShadowed from '../components/atoms/BoxShadowed';
import style from '../styles/portfolio.module.css';

const Portfolios = () => {
  const state = useStateContext();
  const { projects } = state;

  return (
    <div className={style.content}>
      <h1>Portfolio</h1>

      <section className={style.wrapper}>
        {projects.map((project) => (
          <BoxShadowed size='medium'>
            <PortfolioCard key={project.id} {...project} />
          </BoxShadowed>
        ))}
      </section>
    </div>
  );
};

export default Portfolios;
