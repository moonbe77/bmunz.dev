import styled from 'styled-components';

const ProjectBox = styled.section`
  border: 1px solid red;
  height: 300px;
  width: 300px;
`;

const Project = ({ aosEffect, anchor }) => {
  return (
    <ProjectBox data-aos={aosEffect} data-aos-anchor-placement={anchor}>
      <div>Latitud Náutica</div>
      <div>imagen del proyecto</div>
      <div>
        <ul>
          <li>Full Stack</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Styled components</li>
          <li>APi express.js, MySQL, Sequelize ORM</li>
        </ul>
      </div>
    </ProjectBox>
  );
};
export default Project;
