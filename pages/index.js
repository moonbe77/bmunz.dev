import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import Hero from '../components/molecules/Hero';
import WaveSection from '../components/atoms/WaveSection';
import TextComponent from '../components/molecules/TextComponent';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 50,
      once: false,
      offset: 150,
      mirror: true,
    });
    window.addEventListener(
      'touchmove',
      () => {
        AOS.refresh();
      },
      false
    );
  });

  return (
    <>
      <Head>
        <title>BMDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <WaveSection isDarkTheme={true} >
        <TextComponent />
      </WaveSection>

      {/* <Project aosEffect='fade' anchor='top-bottom' /> */}
    </>
  );
}
