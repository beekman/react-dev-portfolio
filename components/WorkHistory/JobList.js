import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import Job from './Job';

const JobList = ({ workHistory }) => {
  const Jobs = workHistory.map((job, i) => {
    return <li key={ i }>
      <Job job={ job } />
    </li >;
  });

  return (
    <div className={ styles.JobList } >
      <h3>Work History</h3>
      <ul>
        { Jobs }
      </ul>
    </div>
  );
};

JobList.propTypes = {
  workHistory: PropTypes.array
};

export default JobList;
