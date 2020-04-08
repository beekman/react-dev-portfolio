import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const Job = ({ job }) => {
  return (
    <section className={ styles.Job }>
      <p className='title'>{ job.title }</p>
      <p className='employer'>{ job.employer }</p>
      <p className='years'>{ job.years }</p>
      <p className='description'>{ job.description }</p>
    </section>
  );
};

Job.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default Job;
