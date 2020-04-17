import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import Project from './Project';

const Projects = ({ projects }) => {

  const ProjectList = projects.tech.map((project, i) => {
    return <section key={i} className={styles.Project}>
      <Project project={project} />
    </section >;
  });

  return (
    <div className={styles.Projects}>
      <section>
        <h1>Projects</h1>
        <p>{projects.summary}</p>
        <p>{projects.history}</p>
      </section>
      {ProjectList}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    history: PropTypes.string,
    feature: PropTypes.shape({
    })
  })
};

export default Projects;
