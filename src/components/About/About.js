import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const About = ({ about }) => {
  return (


    <div className={styles.About}>
      <header>
        <h1>{about.title}</h1>
      </header>

      <main>
        <section>
          <p>{about.summary}</p>
          <p>{about.pitch}</p>
        </section>
        <section>
          <img src={about.photo} />
        </section>
      </main>
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
