import React, { Component } from 'react';
import EducationList from '../components/Education/EducationList';
import WorkHistory from '../components/History/JobList';
import Contact from '../components/Contact/Contact';
import Skills from '../components/Skills/Skills';
import data from '../../public/resume.js';

export default class Resume extends Component {

  render() {
    return (
      <>
        <Contact contact={ data.contact } />
        <EducationList education={ data.education } />
        <WorkHistory workHistory={ data.workHistory } />
        <Skills skills={ data.skills } />
      </>
    );
  }
}
