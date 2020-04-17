import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ feature }) => {
  return (
    <>
      <div><img src={feature.image} alt={feature.title} title={feature.title} /></div>
      {feature.title}
      <p>{feature.description}</p>
    </>
  );
};

Project.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    tech: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
    }).isRequired,
  }),
};

export default Project;
