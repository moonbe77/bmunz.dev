import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import { useStateContext, useStateDispatch } from '../store/store';
import ProjectCard from '../components/molecules/ProjectCard';



export default function Home() {
  const state = useStateContext();

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
    <div>
      <Head>
        <title>BMDev</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProjectCard title='Project Card' />

      {/* <Project aosEffect='fade' anchor='top-bottom' /> */}
    </div>
  );
}
