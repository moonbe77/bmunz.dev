import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import { useStateContext, useStateDispatch } from '../store/store';
// import Project from '../components/Project';
import Button from '../components/Button';
import Header from '../components/Header/';

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
      <Header onLogin={()=>{console.log('on login button')}} user={false}/>
      <Button
        primary={false}
        label='Button demo'
        size='large'
        backgroundColor='#fff'
      />

      {/* <Project aosEffect='fade' anchor='top-bottom' /> */}
    </div>
  );
}
