import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const About = ({ about }) => {
  return (


    <div className={styles.About}>
      <div>
        <ScrollAnimation animateIn="fadeIn">
          <h1>{about.title}</h1>
        </ScrollAnimation>
        <section>
          <p>{about.summary}</p>
        </section>

        <section>
          <p>{about.pitch}</p>
        </section>
      </div>
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
