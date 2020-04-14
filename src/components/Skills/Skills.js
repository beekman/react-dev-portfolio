import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import Skill from './Skill';

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
    <div className={styles.Skills}>
      <p>{skills.techCopy}</p>

      <h2>{skills.techHeading}</h2>
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
