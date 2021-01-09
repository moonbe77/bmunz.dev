import React from 'react';
import { useStateContext } from '../store/store';
import PortfolioProject from '../components/molecules/PortfolioProject';

// import 'aos/dist/aos.css';
const Portfolio = () => {
  const state = useStateContext();
  const { projects, isDarkTheme } = state;

  return (
    <>
      {projects.map((project) => (
        <PortfolioProject
          key={project.id}
          project={project}
          isDarkTheme={isDarkTheme}
        />
      ))}
    </>
  );
};

export default Portfolio;
