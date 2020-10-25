import style from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={style.container}>     
      <main className={style.content}>{children}</main>
      <footer className={style.footer}>
        <img src='/bm-logo_icon.gif' alt='MunzBe logo' className={style.footerLogo} />
      </footer>
    </div>
  );
}
