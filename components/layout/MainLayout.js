import Header from '../molecules/Header';
import style from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={style.container}>
      <Header />
      <main className={style.content}>{children}</main>
      <footer className={style.footer}>
        Copyright 2020 - Built with Next.js
      </footer>
    </div>
  );
}
