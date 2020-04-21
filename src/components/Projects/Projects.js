import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import Project from './Project';
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Projects = ({ projects }) => {

  const ProjectList = projects.feature.map((feature, i) => {
    return <section key={i} className={styles.Project}>
      <Project feature={feature} />
    </section >;
  });

  return (
    <Element name="Projects" className="Projects">
      <div className={styles.Projects}>
        <header>
          <h1>Projects</h1>
          <p>{projects.summary}</p>
          <p>{projects.history}</p>
        </header>
        {ProjectList}
      </div>
    </Element>
  );
};

Projects.propTypes = {
  projects: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    history: PropTypes.string,
    feature: PropTypes.shape([{
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string,
      github: PropTypes.string,
      demo: PropTypes.string,
      tech: PropTypes.shape([{
        name: PropTypes.string.isRequired,
        logo: PropTypes.string,
      }]).isRequired,
    }]),
  })
};
export default Projects;
