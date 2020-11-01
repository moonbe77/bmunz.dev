import React, { useEffect } from 'react';
import AOS from 'aos';
import { useStateContext } from '../store/store';
import PortfolioCard from '../components/molecules/PortfolioCard';
import Header from '../components/molecules/Header';
import BoxShadowed from '../components/atoms/BoxShadowed';
import Title from '../components/atoms/Title';
import style from '../styles/portfolio.module.css';
// import 'aos/dist/aos.css';
const Portfolios = () => {
  const state = useStateContext();
  const { projects } = state;
  const theme = 'dark';

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
      <Header theme={theme} />
      <div className={style.content}>
        <Title size='large'>Portfolio</Title>
        <section className={style.wrapper}>
          {projects.map((project) => (
            <BoxShadowed padSize='none' dataAos='fade-up'>
              <PortfolioCard key={project.id} {...project} />
            </BoxShadowed>
          ))}
        </section>
      </div>
    </>
  );
};

export default Portfolios;
