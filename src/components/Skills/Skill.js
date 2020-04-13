import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App';
import ProgressiveImageLoader from '../commons/progressiveImageLoader';

const Skill = ({ skill }) => {
  return (
    <><div className={styles.logo} ><img src={skill.logo} /></div>
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
