import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.css';
import 'animate.css/animate.min.css';
import Typist from 'react-typist';
import { Element } from 'react-scroll';
import photo from '../../assets/ben-beekman-profile-800.jpg';

const About = ({ about }) => {
  return (

    <Element name="About" className={styles.About}>
      <header>
        <h1>
          <Typist>
            {about.title}
          </Typist>
        </h1>
      </header>

      <main>
        <section>
          <p>{about.summary}</p>
          <p>{about.pitch}</p>
        </section>
        <section>
          <img src={photo} />
        </section>
      </main>
    </Element>
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
