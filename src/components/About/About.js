import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const About = ({ about }) => {
  return (
    <div className={styles.About}>
      <section>
        <h2>{about.title}</h2>
        <p>{about.summary}</p>
      </section>
      <section>
        <p>{about.pitch}</p>
      </section>
      <section>
        <img src={about.photo} />
      </section>
    </div>
  );
};

About.propTypes = {
  about: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    pitch: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  })
};

export default About;
