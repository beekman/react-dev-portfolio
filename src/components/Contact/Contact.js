import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const Contact = ({ contact }) => {

  return (
    <div className={styles.Contact}>
      <h2>Contact Details</h2>
      <div className="address">
        <p>{contact.name}<br />
          {contact.city}, {contact.state}<br />
          {contact.phone}<br />
          {contact.email}</p>
      </div>
      {contact.linkedinURL}
      {contact.githubURL}
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkedinURL: PropTypes.string.isRequired,
    linkedinClassName: PropTypes.string,
    githubURL: PropTypes.string.isRequired,
    githubClassName: PropTypes.string
  })
};

export default Contact;
