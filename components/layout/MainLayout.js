import Header from '../molecules/Header';
import style from './layout.module.css';

export default function Layout({ children }) {
  return (
    <main className={style.container}>
      <Header
        onLogin={() => {
          console.log('on login button');
        }}
        user={null}
      />
      {children}

      <footer className={style.footer}>
        <img src='/bm-logo_icon.gif' alt='MunzBe logo' className={style.logo} />
      </footer>
    </main>
  );
}
