import React, { Component } from 'react';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import styles from '../components/App';
import data from '../../public/portfolio-data.js';


export default class Portfolio extends Component {

  render() {
    return (
      <div className={styles.Portfolio}>
        <About about={data.about} />
        <Skills skills={data.skills} learnings={data.learning} />
        <Projects projects={data.projects} />
        <Contact contact={data.contact} />
      </div>
    );
  }
}
