import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import TecList from '../../atoms/Tec_List'

const ProjectCard = (project) => {
  const { title, description,liveUrl,technologies } = project;

  return (
    <>
      <div className='project-card'>
        <div className='card-grid-item project-card--image'>
          <img src='/vercel.svg' alt='' srcSet='' />
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
