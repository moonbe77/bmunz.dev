import { StateProvider } from '../store/store';
import Layout from '../components/layout/MainLayout';

import '../styles/globals.css';
import 'aos/dist/aos.css';

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `;

const theme = {
  colors: {
    primary: '#0070f3',
  },
  dark: true,
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </Layout>
  );
}

export default MyApp;
