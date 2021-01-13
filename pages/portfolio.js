import React from 'react';
import Head from 'next/head';
import { useStateContext } from '../store/store';
import PortfolioProject from '../components/molecules/PortfolioProject';

// import 'aos/dist/aos.css';
const Portfolio = () => {
  const state = useStateContext();
  const { projects, isDarkTheme } = state;

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
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
