import Header from '../Header';
import style from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={style.hero}>
        <div className={style.content}>
          <h1 className={style.firstLine}>HEY! I'm Bernardo Munz</h1>
          <h2 className={style.secondLine}>Web developer</h2>
        </div>
      </section>
    </>
  );
};

export default Hero;

