import React from 'react';
import PropTypes from 'prop-types';
import styles from './Projects.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Project = ({ feature }) => {

  const TechList = feature.tech.map((tech, i) => {
    return <li key={i} className={styles.Tech}>
      <img src={tech.logo} alt={tech.name} title={tech.name} />
    </li >;
  });

  return (
    <>
      <div className={styles.feature}>
        <div><h2>{feature.title}</h2>
          <p>{feature.description}</p>

          <div className={styles.links}>
            <a href={feature.github}>Github</a>
            <a href={feature.demo}>Live Demo</a>
          </div>
        </div>
        <div>
          <ScrollAnimation animateIn="fadeInUp">
            <img src={feature.image} alt={feature.title} title={feature.title} />
          </ScrollAnimation>
        </div>

      </div>
      <section><span className={styles.usedTechHeading}>Tech stack:</span>
        <div className={styles.tech}>
          {TechList}
        </div>
      </section>

    </>
  );
};

Project.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    github: PropTypes.string,
    demo: PropTypes.string,
    tech: PropTypes.shape([{
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
    }]).isRequired,
  }),
};

export default Project;
