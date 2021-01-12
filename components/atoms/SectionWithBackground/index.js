import { useEffect } from 'react';
import AOS from 'aos';
// import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import style from './SectionWithBackground.module.css';

export default function SectionWithBackground(props) {
  const { isDarkTheme, children } = props;

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      mirror: false,
    });
  });

  return (
    <>
      <div className={`${style.container} `} data-aos="fade-up">
        <svg
          className={`${style.svg} ${style.svgCircle}`}
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="19.8158"
            cy="20.2368"
            r="17.3158"
            transform="rotate(-90 19.8158 20.2368)"
            stroke="#3F69FF"
            strokeWidth="4.94737"
          />
        </svg>
        <svg
          className={`${style.svg} ${style.svgRect}`}
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="21.5084"
            width="24.7368"
            height="24.7368"
            transform="rotate(-45 4 21.5084)"
            stroke="#3F69FF"
            strokeWidth="4.94737"
          />
        </svg>
        <div className={`${style.content} `}>{children}</div>
        <svg
          className={`${style.svg} ${style.svgCircle}`}
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="19.8158"
            cy="20.2368"
            r="17.3158"
            transform="rotate(-90 19.8158 20.2368)"
            stroke="#3F69FF"
            strokeWidth="4.94737"
          />
        </svg>
        <svg
          className={`${style.svg} ${style.svgRect}`}
          width="4
          
          3"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="21.5084"
            width="24.7368"
            height="24.7368"
            transform="rotate(-45 4 21.5084)"
            stroke="#3F69FF"
            strokeWidth="4.94737"
          />
        </svg>
      </div>
    </>
  );
}

SectionWithBackground.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
