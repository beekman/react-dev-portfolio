import React from 'react';
import styles from './Projects.css';
import Project from './Project';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

const Projects = ({ projects }) => {

  const ProjectList = projects.feature.map((feature, i) => {
    return <section key={i} className={styles.Project}>
      <Project feature={feature} />
    </section >;
  });

  return (
    <Element name="Projects" className={styles.Projects}>
      <header>
        <h1>Projects</h1>
        <p>{projects.history}</p>
        <p>{projects.summary}</p>
      </header>
      {ProjectList}
    </Element>
  );
};

Projects.propTypes = {
  projects: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    history: PropTypes.string,
    feature: PropTypes.array,
  })
};

export default Projects;
