import Head from 'next/head';
import { useStateContext } from '../store/store';
import PortfolioWrapper from '../components/molecules/PortfolioWrapperCards';

const Portfolio = () => {
  const state = useStateContext();
  const { projects, isDarkTheme } = state;

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <PortfolioWrapper isDarkTheme={isDarkTheme} projects={projects} />
    </>
  );
};

export default Portfolio;
