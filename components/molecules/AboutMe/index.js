import Link from 'next/link';
import PropTypes from 'prop-types';
import style from './textComponent.module.css';

export default function AboutMe({ isDarkTheme }) {
  const theme = isDarkTheme ? style.dark : style.light;
  const textOutstanding = isDarkTheme
    ? style.textOutstandingDark
    : style.textOutstandingLight;

  return (
    <section id="about" className={`${style.section}`}>
      <div className={`${style.image}`}>
        <img
          src="./svgs/undraw_Firmware_dark.svg"
          alt="Info about bernardo text"
          width="100%"
        />
      </div>
      <div className={`${style.text} ${theme}`}>
        <h3> Hi, It is nice to see you here</h3>
        <div className={`${style.paragraphWrapper}`}>
          <p className={style.paragraph}>
            I’m looking for a position as a junior front end web developer, It
            is time to to start applying what I learned and continue improving
            my skills.
          </p>
          <p className={style.paragraph}>
            I'm a very curious person that loves coding an learn about it I like
            to convert and materialize ideas in products and be able to generate
            an impact with it.
          </p>
          <p className={style.paragraph}>
            <span className={textOutstanding}>Semantics HTML</span>,{' '}
            <span className={textOutstanding}>Javascript</span>,{' '}
            <span className={textOutstanding}>React.js</span>,{' '}
            <span className={textOutstanding}>CSS</span>, is what I will bring
            to my next job as frontend developer. I also have experience with backend
            my last project is an e-commerce made with{' '}
            <span className={textOutstanding}>Next.js</span> on the frontend and
            a <span className={textOutstanding}>Rest-API</span> in{' '}
            <span className={textOutstanding}>Node.js</span> with{' '}
            <span className={textOutstanding}>Express.js</span> and{' '}
            <span className={textOutstanding}>Sequelize.js</span> to connect to
            a<span className={textOutstanding}> MySql </span>database.
          </p>

          <p className={style.paragraph}>
            I’m an electronic technician looking for a change in my career, I’ve
            been working in manufacturing & testing of high-tech products for 16
            years, solving problems, debugging and thinking out of the box is
            some of the things that I learned and will carry with me in this new
            journey.
          </p>
          <p className={style.paragraph}>
            Check my{' '}
            <Link href="/projects">
              <a className={textOutstanding}>portfolio</a>
            </Link>{' '}
            there are some of my last projects for small local businesses in
            Argentina.
          </p>
          <p className={style.paragraph}>
            I love to create responsive and functional websites that are easy to
            use and make sense for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

AboutMe.propTypes = {
  isDarkTheme: PropTypes.bool,
};
