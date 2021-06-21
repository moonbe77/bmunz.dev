import Head from 'next/head';
import { useStateContext } from '../store/store';
import Bot from '../components/molecules/Bot';

export default function Home() {
  const { isDarkTheme } = useStateContext();

  return (
    <>
      <Head>
        <title>bMunz.dev - Frontend Developer</title>
      </Head>
      <Bot />
    </>
  );
}
