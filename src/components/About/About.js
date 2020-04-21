import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import 'animate.css/animate.min.css';
import Typist from 'react-typist';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const About = ({ about }) => {
  return (

    <Element name="About" className="About">
      <div className={styles.About}>
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
            <img src={about.photo} />
          </section>
        </main>
      </div>
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
