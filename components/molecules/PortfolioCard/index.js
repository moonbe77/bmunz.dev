import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import StringWithBorder from '../../atoms/StringWithBorder';
import style from './portfolioCard.module.css';

const PortfolioCard = (props) => {
  const { title, imgName, description, liveUrl, technologies } = props.project;

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
      <div className={style.card} data-aos='fade-up'>
        <div className={style.imageWrapper}>
          <Image
            className={style.image}
            src={`/projects_mockups/${imgName}`}
            alt={title}
            width={450}
            height={291}
            layout='responsive'
          />
        </div>

        <div className={style.info}>
          <div className={style.cardHeader}>
            <Title size='large'>{title}</Title>
            <div className={style.cardDescription}>{description}</div>
          </div>
          <div className={style.tecList}>
            {technologies &&
              technologies.map((item, index) => {
                return <StringWithBorder key={`card${index}`} string={item} />;
              })}
          </div>
          <a href={liveUrl} target='_blank' rel='noopener noreferrer'>
            <Button primary label='check it out' />
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    liveUrl: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
};
