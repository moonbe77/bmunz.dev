import Link from 'next/link';
import Header from '../molecules/Header';
import styles from '../../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <Header onLogin={()=>{console.log('on login button')}} user={null}/>

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
