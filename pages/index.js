import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AOS from 'aos';
import { useStateContext, useStateDispatch } from '../store/store';
import Hero from '../components/molecules/Hero';
import BoxShadowed from '../components/atoms/BoxShadowed';
import style from '../styles/home.module.css';
import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiMysql,
  DiNodejs,
  DiCss3,
} from 'react-icons/di';

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
      <Hero />
      <section>
        <BoxShadowed padSize='large'>
          <div className={style.me}>
            <div>
              <p className={style.paragraph}>
                Hi, I’m Bernardo a front end dev looking for a change in my
                career, I’ve been working in the testing & manufacturing of
                different kind of systems since I started working 18 years ago,
                I love to solve problems and think out of the box to find issues
                where is hard to find them.
              </p>
              <p className={style.paragraph}>
                My curiosity is what pushes me to learn and keeps me motivated
                to continue in the learning loop. I started learning web
                development 6 years ago self tough been curious in how was the
                life cycle of a web page.
              </p>
              <p className={style.paragraph}>
                <Link href='/portfolio'>
                  <a> check my portfolio</a>
                </Link>
              </p>
              <p className={style.paragraph}>
                It started as a Hobbies, but after making some professional
                projects and earn some money with them I understand that it is
                what I want to do, it is what wakes me up early in the morning
                to keep learning.
              </p>
              <p className={style.paragraph}>
                I’m looking for a position as a web developer I want to start
                applying what I learned and continue improving my skills.
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
          <div className={style.techIcons}>
            <DiHtml5 />
            <DiCss3 />
            <DiJavascript1 />
            <DiReact />
            <DiNodejs />
            <DiMysql />
          </div>
        </BoxShadowed>
      </div>

      {/* <Project aosEffect='fade' anchor='top-bottom' /> */}
    </>
  );
}
