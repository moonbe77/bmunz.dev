import { useEffect } from 'react';
import AOS from 'aos';
// import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import style from './SectionWithBackground.module.css';

export default function SectionWithBackground(props) {
  const { children } = props;
  const time = () => Math.random();
  // useEffect(() => {
  //   const circle = document.querySelector('#svgCircle');
  //   const rect1 = document.querySelector('#svgRect1');
  //   const rect2 = document.querySelector('#svgRect2');
  //   circle.style.setProperty('--random-x1', `${time}em`);
  //   circle.style.setProperty('--random-y1', `${time * 10}em`);
  //   rect1.style.setProperty('--random-x1', `${time}em`);
  //   rect1.style.setProperty('--random-y1', `${time * 10}em`);
  //   rect2.style.setProperty('--random-x1', `${time}em`);
  //   rect2.style.setProperty('--random-y1', `${time * -10}em`);
  // });

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
     
       
      
        <div className={`${style.content} `}>{children}</div>
      </div>
    </>
  );
}

SectionWithBackground.propTypes = {
  children: PropTypes.node.isRequired,
};


