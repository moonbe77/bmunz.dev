/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { StateProvider } from '../store/store';
import Layout from '../components/layout/MainLayout';
import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Open+Sans&display=swap"
          rel="stylesheet"
          // crossOrigin
        />
        <title>Bernardo Munz Frontend Web Developer</title>
        <meta
          name="description"
          content="I am very passionate about coding and the endless possibilities it has, this is why I am pushing for this change. 
          I'm a quick learner with a big enthusiasm for creating, solving problems and keen attention for details.
My experience as a web developer includes institutional websites for local businesses in Argentina helping them to improve their presence on the internet."
        />
        <meta
          name="og:title"
          property="og:title"
          content="Bernardo Munz Frontend Web Developer"
        />
        <meta property="og:image" content="./figma/bmunz.png" />
        <meta property="og:image:type" content="image/png" />

        <meta
          property="og:description"
          content="Description that will show in the preview"
        />
        <meta
          property="og:url"
          content="I am very passionate about coding and the endless possibilities it has, this is why I am pushing for this change. 
          I'm a quick learner with a big enthusiasm for creating, solving problems and keen attention for details.
My experience as a web developer includes institutional websites for local businesses in Argentina helping them to improve their presence on the internet."
        />
      </Head>
      <StateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateProvider>
    </>
  );
}

export default MyApp;
