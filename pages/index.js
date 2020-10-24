import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import { useStateContext, useStateDispatch } from '../store/store';
import GifLogo from '../components/atoms/GifLogo';
import BoxShadowed from '../components/atoms/BoxShadowed';
import style from '../styles/home.module.css';

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
    <>
      <Head>
        <title>BMDev</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section>
        <BoxShadowed padSize='large'>
          <div className={style.me}>
            <GifLogo />
            <div>
              <p className={style.paragraph}>
                I have been teaching my self web technologies for 6 years.
                Started with html, css, jquery and php / mysql.
              </p>
              <p className={style.paragraph}>
                After a whilr I put away jquery trying to go depth on the basics
                of coding with this changes appear node and react, little by
                little I have been studying and following different web
                technologies always switching between frontend and backend.
              </p>
              <p className={style.paragraph}>CHECK MY PROJECTS</p>
              <p className={style.paragraph}>
                I am a restless person, always looking for something to learn or
                improve my skills.
              </p>
              <p className={style.paragraph}>
                I love to create responsive and functional websites that are
                easy to use and make sense for everyone.
              </p>
            </div>
          </div>
        </BoxShadowed>
      </section>

      <div>
        <BoxShadowed>
          <div className={style.techIcons}>banner with icons to different technologies</div>
        </BoxShadowed>
      </div>

      {/* <Project aosEffect='fade' anchor='top-bottom' /> */}
    </>
  );
}
