import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import TecList from '../../atoms/Tec_List';
import style from './portfolioCard.module.css';

const PortfolioCard = (project) => {
  const { title, description, liveUrl, technologies } = project;
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className={style.card}
        onMouseOver={() => {
          setShow(true);
        }}
        onMouseOut={() => {
          setShow(false);
        }}
      >
        <div className={style.imageWrapper}>
          <Image
            src={`/projects_mockups/${project.imgName}`}
            alt={title}
            width={450}
            height={291}
            // unsized
          />
        </div>

        <div className={`${style.info} ${show ? style.show : style.hide}`}>
          <div className={style.cardHeader}>
            <Title size='large'>{title}</Title>
            <div className={style.cardDescription}>{description}</div>
          </div>
          <TecList list={technologies} />
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
  project: PropTypes.object,
};
