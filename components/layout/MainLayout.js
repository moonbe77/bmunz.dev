import Link from 'next/link';
import Header from '../molecules/Header';

export default function Layout({ children }) {
  return (
    <main className='main-container'>
      <Header
        onLogin={() => {
          console.log('on login button');
        }}
        user={null}
      />
      {children}

      <footer className='footer'>
        <img src='/bm-logo_icon.gif' alt='MunzBe' className='logo' />
      </footer>
    </main>
  );
}
