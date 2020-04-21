import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import Skill from './Skill';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Skills = ({ skills }) => {

  const SkillList = skills.tech.map((skill, i) => {
    return <li key={i} className={styles.Skill}>
      <Skill skill={skill} />
    </li >;
  });

  const LearningList = skills.learning.map((learning, i) => {
    return <li key={i} className={styles.Skill}>
      <Skill skill={learning} />
    </li >;
  });

  return (
    <Element name="Skills" className="Skills">
      <div className={styles.Skills}>
        <h1>{skills.heading}</h1>
        <section>
          <p>{skills.techCopy}</p>

          <h2>{skills.techHeading}</h2>
          <ScrollAnimation animateIn='fadeInUp'
            animateOut='fadeOutDown'>
            <ul>
              {SkillList}
            </ul>
          </ScrollAnimation>

          <h2>I&apos;m learning these:</h2>

          <ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutDown'>
            <ul>
              {LearningList}
            </ul>
          </ScrollAnimation>
        </section>
      </div >
    </Element>
  );
};

Skills.propTypes = {
  skills: PropTypes.object,
  tech: PropTypes.array,
  learning: PropTypes.array
};

export default Skills;
