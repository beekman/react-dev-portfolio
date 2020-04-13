import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App';
import ProgressiveImageLoader from '../commons/progressiveImageLoader';

const Skill = ({ skill }) => {
  return (
    <><img src={skill.logo} className={styles.logo} />
      {skill.name}
    </>
  );
};

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string
  }).isRequired
};

export default Skill;
