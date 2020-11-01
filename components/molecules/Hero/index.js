import Header from '../Header';
import style from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <Header className={style.header} theme='dark' />
      <section className={style.hero}>
        <div className={style.content}>
          <h1 className={style.h1}>Bernardo Munz</h1>
          <h2 className={style.h2}>Web developer</h2>
        </div>
      </section>
    </>
  );
};

export default Hero;

