import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App';
import ScrollAnimation from 'react-animate-on-scroll';

const Project = ({ feature }) => {

  const TechList = feature.tech.map((feature, i) => {
    return <li key={i} className={styles.Project}>
    </li >;
  });

  return (
    <>
      <div>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
        <div></div>
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
