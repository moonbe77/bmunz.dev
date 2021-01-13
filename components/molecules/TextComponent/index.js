import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiMysql,
  DiNodejs,
  DiCss3,
} from 'react-icons/di';
import { useStateContext } from '../../../store/store';
import style from './textComponent.module.css';

export default function TextComponent() {
  const state = useStateContext();
  const { isDarkTheme } = state;
  const theme = isDarkTheme ? style.dark : style.light;

  return (
    <section className={`${style.section}`}>
      <div className={`${style.image}`}>
        <img
          src="./svgs/undraw_Firmware_dark.svg"
          alt=""
          srcSet=""
          width="100%"
        />
      </div>
      <div className={`${style.text} ${theme}`}>
        <h1> Hi, It is nice to see you here</h1>
        <div className={`${style.textWrapper}`}>
          <p className={style.paragraph}>
            I’m a electronic technician looking for a change in my career, I’ve
            been working in manufacturing of different kind of products since I
            started working 18 years ago, I love to solve problems and think out
            of the box to analyze and detect possible bugs.
          </p>
          <p className={style.paragraph}>
            My curiosity is what pushes me to learn and keeps me motivated to
            continue in the learning loop. I started learning web development 6
            years ago self tough being curious in how is the life cycle of the
            web.
          </p>
          <p className={style.paragraph}>
            It started as a Hobbies, but after making some projects for close
            people I understand that it is what I want to do, it is what wakes
            me up early in the morning and keeps my mind busy in solving
            problems.
          </p>
          <p className={style.paragraph}>
            I’m looking for a position as a web developer I want to start
            applying what I learned and continue improving my skills.
          </p>
          <p className={style.paragraph}>
            I love to create responsive and functional websites that are easy to
            use and make sense for everyone.
          </p>
        </div>
      </div>
      {/* <div>
        <div className={`${style.techIcons} `}>
          <DiHtml5 />
          <DiCss3 />
          <DiJavascript1 />
          <DiReact />
          <DiNodejs />
          <DiMysql />
        </div>
      </div> */}
    </section>
  );
}
