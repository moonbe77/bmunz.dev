import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import TecList from '../../atoms/Tec_List';
import style from './project_card.module.css';

const ProjectCard = (project) => {
  const { title, description, liveUrl, technologies } = project;

  return (
    <>
      <div className={style.card}>
        <div className={`${style.grid_item}`}>
          <img className={style.card_image} src={`/projects_mockups/${project.imgName}`} alt='' srcSet='' />
        </div>
        <div className={`card-grid-item project-card--info`}>
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
  project: PropTypes.object.isRequired,
};
