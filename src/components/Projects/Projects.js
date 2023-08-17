import React from 'react';
import styles from './Projects.css';
import Project from './Project';
import Site from './Site';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

const Projects = ({ projects }) => {

  const ProjectList = projects.feature.map((feature, i) => {
    return <section key={i} className={styles.Project}>
      <Project feature={feature} />
    </section >;
  });

  // eslint-disable-next-line react/prop-types
  const SiteList = projects.site.map((site, i) => {
    return <Site site={site} key={i} />;
  });

  return (
    <Element name="Projects" className={styles.Projects}>
      <header>
        <h1>Projects</h1>
        <p>{projects.summary}</p>
      </header>
      {ProjectList}
      <header>
        <h1>{projects.sitesTitle}</h1>
        <p>{projects.sitesSummary}</p>
      </header>
      <div className={styles.siteGrid}>
        {SiteList}
      </div>
    </Element>
  );
};

Projects.propTypes = {
  projects: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    feature: PropTypes.array,
    sitesTitle: PropTypes.string.isRequired,
    sitesSummary: PropTypes.string.isRequired,
    site: PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  })
};

export default Projects;
