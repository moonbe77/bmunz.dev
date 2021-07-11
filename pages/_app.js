/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { StateProvider } from '../store/store';
import { BotStateProvider } from '../store/botContext';
import Layout from '../components/Layout';
import '../styles/normalize.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/icon-96x96.png"
        />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/icon-32x32.png"
        /> */}
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/icons/icon-72x72.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Open+Sans&display=swap"
          rel="stylesheet"
          // crossOrigin
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>Bernardo Munz Frontend Developer</title>
        <meta
          name="description"
          content="I am Bernardo an electronic technician persuading a change of career into Frontend developing, React.js, Next.js & Express.js is my stack today, check my porfolio for more info"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.bmunz.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bernardo Munz Frontend Web Developer"
        />
        <meta
          property="og:description"
          content="I am Bernardo an electronic technician persuading a change of career into Frontend developing, React.js, Next.js & Express.js is my stack today, check my porfolio for more info"
        />
        <meta property="og:image" content="./figma/bmunz.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bmunz.dev" />
        <meta property="twitter:url" content="https://www.bmunz.dev/" />
        <meta
          name="twitter:title"
          content="Bernardo Munz Frontend Web Developer"
        />
        <meta
          name="twitter:description"
          content="I am Bernardo an electronic technician persuading a change of career into Frontend developing, React.js, Next.js & Express.js is my stack today, check my porfolio for more info"
        />
        <meta name="twitter:image" content="./figma/bmunz.png" />
        <script
          type="text/javascript"
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
        />
      </Head>
      <StateProvider>
        <BotStateProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BotStateProvider>
      </StateProvider>
    </>
  );
}

export default MyApp;
