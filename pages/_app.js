import Head from 'next/head';
import { StateProvider } from '../store/store';
import Layout from '../components/layout/MainLayout';

import '../styles/normalize.css';
import '../styles/globals.css';
import 'aos/dist/aos.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
  dark: true,
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <Layout>
        <StateProvider>
          <Component {...pageProps} />
        </StateProvider>
      </Layout>
    </>
  );
}

export default MyApp;
