import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const About = ({ about }) => {
  return (
    <div className={styles.About}>
      <div>
        <h1>{about.title}</h1>
        <section>
          <p>{about.summary}</p>
        </section>
        <section>
          <p>{about.pitch}</p>
        </section>
        <section>
          <img src={about.photo} />
        </section>
      </div>
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
