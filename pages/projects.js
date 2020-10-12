import React from 'react';
import ProjectCard from '../components/molecules/ProjectCard';
import { useStateContext } from '../store/store';

const ProjectsPage = () => {
  const state = useStateContext();
  const { projects } = state;

  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </>
  );
};

export default ProjectsPage;
