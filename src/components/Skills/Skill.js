import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App';

const Skill = ({ skill }) => {
  return (
    <div><img src={skill.logo} styleName={styles.skillLogo} />
      <br />{skill.name}</div>
  );
};

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string
  }).isRequired
};

export default Skill;
