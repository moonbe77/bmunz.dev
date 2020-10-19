import React from 'react';
import ProjectCard from '../components/molecules/ProjectCard';
import { useStateContext } from '../store/store';
import style from '../styles/portfolio.module.css';

const Portfolios = () => {
  const state = useStateContext();
  const { projects } = state;

  return (
    <section className={style.wrapper}>
      {projects.map((project) => (
        <ProjectCard
          className={style.card}
          key={project.id}
          {...project}
        />
      ))}
    </section>
  );
};

export default Portfolios;
