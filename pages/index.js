import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import { useStateContext, useStateDispatch } from '../store/store';
import styled from 'styled-components';
import Project from '../components/Project';

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
    <div>
      <Head>
        <title>BMDev</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Project aosEffect='fade' anchor='top-bottom' />
      <Project aosEffect='fade-in' />
      <Project aosEffect='fade-down' />
      <Project aosEffect='fade-down' />
      <Project aosEffect='fade-down' />
      <Project aosEffect='fade-down' />
      <Project aosEffect='flip-up' />
      <Project aosEffect='flip-down' />
      <Project aosEffect='flip-left' />
      <Project aosEffect='flip-right' />
      <Project aosEffect='flip-up' />
      <Project aosEffect='flip-up' />
      <Project aosEffect='zoom-in' />
      <Project aosEffect='zoom-up' />
      <Project aosEffect='zoom-in-down' />
      <Project aosEffect='zoom-in-left' />
      <Project aosEffect='zoom-out' />
      <Project aosEffect='zoom-out-up' />
      <Project aosEffect='zoom-in' />
      <Project aosEffect='zoom-in' />
      <Project aosEffect='zoom-in' />
      <Project aosEffect='zoom-in' />
      <Project aosEffect='zoom-in' />
      <Project aosEffect='zoom-in' />
    </div>
  );
}
