import React from 'react';
import { useStateContext } from '../store/store';
import PortfolioCard from '../components/molecules/PortfolioCard';
import Title from '../components/atoms/Title';
import style from '../styles/portfolio.module.css';
// import 'aos/dist/aos.css';
const Portfolios = () => {
  const state = useStateContext();
  const { projects } = state;

  return (
    <>
      <div className={style.content}>
        <Title size="large">Portfolio</Title>
        <section className={style.wrapper}>
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Portfolios;
