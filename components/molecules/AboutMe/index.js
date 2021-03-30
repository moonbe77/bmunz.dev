import PropTypes from 'prop-types';
import style from './textComponent.module.css';

export default function AboutMe({ isDarkTheme }) {
  const theme = isDarkTheme ? style.dark : style.light;

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
        <h1> Hi, It is nice to see you here</h1>
        <div className={`${style.textWrapper}`}>
          <p className={style.paragraph}>
            I’m looking for a position as a front end web developer, this will
            be my first full-time position as a programmer. I want to start
            applying what I learned and continue improving my skills and growing
            in this field.
          </p>
          <p className={style.paragraph}>
            I’m an electronic technician looking for a change in my career, I’ve
            been working in manufacturing & testing of high tech products for 16 years, solving
            problems, debugging and thinking out of the box is some of the
            things that I learned and will carry with me in this new journey.
          </p>
          <p className={style.paragraph}>
            I'm a very curious person this is what pushes me to learn and keeps
            me motivated, I started learning web development 6 years ago self
            tough being curious about how is internet able to show me web pages.
          </p>
          <p className={style.paragraph}>
            After making some projects for close people and small local
            businesses in Argentina as a freelance I found that this is my
            passion and I want to apply what I learned and help people to
            connect to this always evolving world of technology.
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
