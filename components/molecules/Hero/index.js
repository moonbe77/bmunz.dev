import Header from '../Header';
import style from './Hero.module.css'

const Hero = () => {
  return (
    <section className={style.hero}>
      <Header />
      <div className={style.content}>

      <h1>Bernardo Munz</h1>
      <h2>who I am!</h2>
      </div>
    </section>
  );
};

export default Hero;
