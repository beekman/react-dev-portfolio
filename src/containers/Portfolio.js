import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import data from '../portfolio-data.js';
export default class Portfolio extends Component {

  render() {
    return (
      <>
        <Nav />
        <About about={data.about} />
        <Skills skills={data.skills} learning={data.learning} />
        <Projects projects={data.projects} />
        <Contact contact={data.contact} />
      </>
    );
  }
}
