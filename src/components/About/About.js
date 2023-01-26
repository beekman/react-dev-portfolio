import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.css';
import Typist from 'react-typist';
import { Element } from 'react-scroll';
import photo from '../../assets/ben-beekman-profile-800.jpg';

const About = ({ about }) => {
  return (

    <Element name="About" className={styles.About}>
      <header>
        <h1>
          <Typist cursor={{ hideWhenDone: true }}>
            Hi, I&apos;m Ben. I&apos;m a Full Stack Web Engineer
            <Typist.Backspace count={12} delay={750} /><Typist.Delay ms={800} />Software Engineer<Typist.Backspace count={28} delay={750} /><Typist.Delay ms={850} />Front End Engineer<Typist.Backspace count={18} delay={500} /><Typist.Delay ms={850} />Back End Engineer<Typist.Backspace count={17} delay={500} /><Typist.Delay ms={1150} />Full Stack Engineer.</Typist>
        </h1>
      </header>

      <main>
        <section>
          <p>{about.summary}</p>
          <p>{about.pitch}</p>
        </section>
        <figure className={styles.profile}>
          <img src={photo} />
        </figure>
      </main>
    </Element>
  );
};

About.propTypes = {
  about: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    pitch: PropTypes.string.isRequired
  })
};

export default About;
