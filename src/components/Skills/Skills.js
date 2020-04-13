import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import Skill from './Skill';

const Skills = ({ skills }) => {
  const SkillList = skills.map((skill, i) => {
    return <li key={i} className={styles.logo}>
      <Skill skill={skill} />
    </li >;
  });

  return (
    <div className={styles.Skills}>
      <h2>Skills</h2>
      <ul>
        {SkillList}
      </ul>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array
};

export default Skills;
