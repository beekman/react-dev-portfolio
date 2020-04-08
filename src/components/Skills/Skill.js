import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skill }) => {
  return (
    <span>{ skill.name }</span>
  );
};

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Skill;
