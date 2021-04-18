import { TopTen, PlayingNow } from '../Spotify';
import Form from '../../molecules/Form';
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
    </footer>
  );
}

export default Footer;
