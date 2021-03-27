import Head from 'next/head';
import { useStateContext } from '../store/store';
import PortfolioWrapper from '../components/molecules/PortfolioWrapperCards';

const Portfolio = () => {
  const state = useStateContext();
  const { projects, isDarkTheme } = state;
  // const [cardLayout, setCardLayout] = useState(true);

  // const handleLayoutSwitch = () => {
  //   setCardLayout((prev) => !prev);
  // };
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* <div>
        there are the projects that I worked on, all of them are made by myself
        totally.
        <button type="button" onClick={handleLayoutSwitch}>
          {cardLayout ? 'card' : 'list'}
        </button>
      </div> */}
      <PortfolioWrapper isDarkTheme={isDarkTheme} projects={projects} />
    </>
  );
};

export default Portfolio;
