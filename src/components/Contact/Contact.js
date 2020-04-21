import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const Contact = ({ contact }) => {

  return (
    <div className={styles.Contact}>
      <h2>{contact.heading}</h2>
      <div className="address">
        <p>{contact.name}<br />
          {contact.city}, {contact.state}<br />
          {contact.phone}<br />
          {contact.email}</p>
      </div>
      <aside><a href={contact.linkedinURL}>LinkedIn profile</a>
        <a href={contact.githubURL}>Github profile</a>
      </aside>
    </div >
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    heading: PropTypes.string,
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
