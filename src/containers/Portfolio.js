import React, { Component } from 'react';
import Contact from '../components/Contact/Contact';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import data from '../../public/portfolio-data.js';
export default class Resume extends Component {

  render() {
    return (
      <>
        <Contact contact={data.contact} />
        <About />
        <Skills skills={data.skills} />
      </>
    );
  }
}
