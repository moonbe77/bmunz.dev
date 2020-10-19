import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import TecList from '../../atoms/Tec_List';
import style from './project_card.module.css';

const ProjectCard = (project) => {
  const { title, description, liveUrl, technologies } = project;
  const [show, setShow] = useState(false);

  const handleMouseOver = (e) => {
    console.log(e.target);
    setShow(!show);
  };

  return (
    <>
      <div className={style.card} onMouseOver={handleMouseOver}>
        <img
          className={style.image}
          src={`/projects_mockups/${project.imgName}`}
          alt={title}
          srcSet=''
        />

        <div className={`${style.info} ${show ? style.show : style.hide}`}>
          <Title size='large'>{title}</Title>
          <div>{description}</div>
          <TecList list={technologies}></TecList>
          <a href={liveUrl} target='_blank' rel='noopener noreferrer'>
            <Button primary label='check it out' />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.object,
};
