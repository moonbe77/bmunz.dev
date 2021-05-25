import { TopTen, PlayingNow } from '../Spotify';
import Form from '../Form';
import styles from './footer.module.css';

function Footer({ isDarkTheme }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <Form isDarkTheme={isDarkTheme} />
        </div>
        <div className={styles.spotify}>
          <PlayingNow />
          <TopTen />
        </div>
      </div>
      <div className={styles.copyright}>Bernardo Munz © 2021</div>
      <div className={styles.deployment}>
        <span>{process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}</span>
        <span>{process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE}</span>
        <span>{process.env.NEXT_PUBLIC_VERCEL_ENV}</span>
      </div>
    </footer>
  );
}

export default Footer;
