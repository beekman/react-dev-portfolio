import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import Project from './Project';



const Projects = ({ projects }) => {

  const ProjectList = projects.feature.map((feature, i) => {
    return <section key={i} className={styles.Skill}>
      <Project feature={feature} className={styles.Project} />
    </section >;
  });

  return (
    <div className={styles.Projects}>
      <header>
        <h1>Projects</h1>
        <p>{projects.summary}</p>
        <p>{projects.history}</p>
      </header>
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
