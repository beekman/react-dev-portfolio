import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const EducationItem = ({ education }) => {
  return (
    <div className={ styles.EducationItem }>
      <p className='school'>{ education.school }</p>
      <p className='degree'>{ education.degree }</p>
      <p className='graduated'>{ education.graduated }</p>
      <p className='description'>{ education.description }</p>
    </div>
  );
};

EducationItem.propTypes = {
  education: PropTypes.shape({
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    graduated: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default EducationItem;
