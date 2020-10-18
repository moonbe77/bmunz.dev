import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import { useStateContext, useStateDispatch } from '../store/store';
import Hero from '../components/hero';
import style from '../styles/Home.module.css';

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

      <section className={style.me}>
        <Hero />
        <div>
          <p className={style.paragraph}>
            I have been teaching my self web technologies for 6 years. Started
            with html, css, jquery and php / mysql.
          </p>
          <p className={style.paragraph}>
            After a whilr I put away jquery trying to go depth on the basics of
            coding with this changes appear node and react, little by little I have been
            studying and following different web technologies always switching
            between frontend and backend.
          </p>
          <p className={style.paragraph}>CHECK MY PROJECTS</p>
          <p p className={style.paragraph}>
            I am a restless person, always looking for something to learn or
            improve my skills.
          </p>
          {/* <p className={style.paragraph}>
            From the beginning I focused on learning and develop the whole
            ecosystem for websites, defining the architecture and developing it.
          </p> */}
          <p className={style.paragraph}>
            I love to create responsive and functional websites that are easy to use and make sense for
            everyone.
          </p>
        </div>
      </section>

      {/* <Project aosEffect='fade' anchor='top-bottom' /> */}
    </div>
  );
}
