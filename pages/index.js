import Head from 'next/head';
import Hero from '../components/molecules/Hero';
import SectionWithBackground from '../components/atoms/SectionWithBackground';
import TextComponent from '../components/molecules/TextComponent';
import { useStateContext } from '../store/store';

export default function Home() {
  const { isDarkTheme } = useStateContext();

  return (
    <>
      <Head>
        <title>bMunz.dev</title>
      </Head>
      <Hero />
      <SectionWithBackground isDarkTheme={isDarkTheme}>
        <TextComponent isDarkTheme={isDarkTheme} />
      </SectionWithBackground>
    </>
  );
}
