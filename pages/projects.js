import Head from 'next/head';
import { useStateContext } from '../store/store';
import PortfolioProjectsWrapper from '../components/molecules/PortfolioProjectWrapper';

const Portfolio = () => {
  const state = useStateContext();
  const { projects, isDarkTheme } = state;

  return (
    <>
      <Head>
        <title>Projects - bmunz.dev</title>
      </Head>
      <PortfolioProjectsWrapper isDarkTheme={isDarkTheme} projects={projects} />
    </>
  );
};

export default Portfolio;
