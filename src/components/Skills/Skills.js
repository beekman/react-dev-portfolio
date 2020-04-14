import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import Skill from './Skill';

const Skills = ({ skills, learnings }) => {
  const SkillList = skills.map((skill, i) => {
    return <li key={i} className={styles.Skill}>
      <Skill skill={skill} />
    </li >;
  });

  const LearningList = learnings.map((learning, i) => {
    return <li key={i} className={styles.Skill}>
      <Skill skill={learning} />
    </li >;
  });

  return (
    <div className={styles.Skills}>
      <p>Most of my recent development work is  written in JavaScript, but I have also worked with several other langueages. I believe that my experience with Python and PHP makes me a better, more well-rounded developer.</p>
      <h2>I currently use these technologies:</h2>
      <ul>
        {SkillList}
      </ul>
      <h2>I am currently learning these technologies:</h2>
      <ul>
        {LearningList}
      </ul>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array,
  learnings: PropTypes.array
};

export default Skills;
