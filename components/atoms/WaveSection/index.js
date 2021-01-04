import { useEffect } from 'react';
import AOS from 'aos';
import PropTypes from 'prop-types';
import style from './WaveSection.module.css';

export default function WaveSection(props) {
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
    });
  });

  return (
    <>
      <div className={`${style.container} `} data-aos="fade-up">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={`${style.wave} ${style.waveTop} ${
            isDarkTheme ? style.waveDark : style.waveLight
          }`}
        >
          <path
            fillOpacity="1"
            d="M0,256L48,224C96,192,192,128,288,133.3C384,139,480,213,576,202.7C672,192,768,96,864,69.3C960,43,1056,85,1152,122.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <div
          className={`${style.content} ${
            isDarkTheme ? style.dark : style.light
          }`}
        >
          {children}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={`${style.wave} ${style.waveBottom} ${
            isDarkTheme ? style.waveDark : style.waveLight
          }`}
        >
          <path
            fillOpacity="1"
            d="M0,256L48,224C96,192,192,128,288,133.3C384,139,480,213,576,202.7C672,192,768,96,864,69.3C960,43,1056,85,1152,122.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
    </>
  );
}

WaveSection.propTypes = {
  isDarkTheme: PropTypes.bool,
  children: PropTypes.node,
};
