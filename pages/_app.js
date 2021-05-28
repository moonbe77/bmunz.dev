/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { StateProvider } from '../store/store';
import Layout from '../components/Layout';
import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/icon-96x96.png"
        />
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
          content="Semantics HTML, Javascript, React.js, CSS, is what I will bring to my next job as frontend developer. I also have experience with backend my last project is an e-commerce made with Next.js on the frontend and a Rest-API in Node.js with Express.js and Sequelize.js to connect to a MySql database."
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
          content="Semantics HTML, Javascript, React.js, CSS, is what I will bring to my next job as frontend developer. I also have experience with backend my last project is an e-commerce made with Next.js on the frontend and a Rest-API in Node.js with Express.js and Sequelize.js to connect to a MySql database."
        />
        <meta
          property="og:image"
          content="https://www.bmunz.dev/figma/bmunz.png"
        />

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
          content="Semantics HTML, Javascript, React.js, CSS, is what I will bring to my next job as frontend developer. I also have experience with backend my last project is an e-commerce made with Next.js on the frontend and a Rest-API in Node.js with Express.js and Sequelize.js to connect to a MySql database."
        />
        <meta
          name="twitter:image"
          content="https://www.bmunz.dev/figma/bmunz.png"
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
