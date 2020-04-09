import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import Skill from './Skill';

const Skills = ({ skills }) => {
  const SkillList = skills.map((skill, i) => {
    return <li key={ i }>
      <Skill skill={ skill } />
    </li >;
  });

  return (
    <div className={styles.SkillList}>
      <h3>Work History</h3>
      <ul>
        { SkillList }
      </ul>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array
};

export default Skills;
