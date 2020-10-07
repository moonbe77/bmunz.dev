import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link href='/'>
            <a>Home</a>
          </Link>{' '}
          |
          <Link href='/about'>
            <a>About</a>
          </Link>{' '}
          |
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      {children}

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
