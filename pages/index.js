import Head from 'next/head';
// import dynamic from 'next/dynamic';
import Hero from '../components/molecules/Hero';
import AboutMe from '../components/molecules/AboutMe';
import { useStateContext } from '../store/store';

// const SectionObserved = dynamic(
//   () => import('../components/atoms/SectionObserved'),
//   {
//     ssr: false,
//   }
// );

// const TicTacToe = dynamic(() => import('../components/molecules/TicTacToe'), {
//   ssr: false,
// });

export default function Home() {
  const { isDarkTheme } = useStateContext();

  return (
    <>
      <Head>
        <title>bMunz.dev - Frontend Developer</title>
      </Head>
      <Hero />
      <AboutMe isDarkTheme={isDarkTheme} />
    </>
  );
}
