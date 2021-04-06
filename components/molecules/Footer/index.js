import { TopTen, PlayingNow } from '../Spotify';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>2021</div>
      <TopTen />
      <PlayingNow />
    </footer>
  );
}

export default Footer;
