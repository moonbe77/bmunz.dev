import Head from 'next/head';
import projects from '../public/data/projects.json';
import { useStateContext } from '../store/store';
import PortfolioProject from '../components/molecules/PortfolioProject';

// import 'aos/dist/aos.css';
const Portfolio = ({projects}) => {
  const state = useStateContext();
  const { isDarkTheme } = state;

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      {projects.data &&
        projects.data.map((project, i) => (
          <PortfolioProject
            key={i}
            project={project}
            isDarkTheme={isDarkTheme}
          />
        ))}
    </>
  );
};

export default Portfolio;

export async function getStaticProps() {
  return {
    props: { projects }, // will be passed to the page component as props
  };
}
