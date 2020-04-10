import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const Contact = ({ contact }) => {
  
  return (
    <div className={ styles.Contact }>
      <h2>Contact Details</h2>
      <p className="address">
        <span>{ contact.name }</span><br />
        <span>{ contact.street }<br />
          { contact.city }, { contact.state } { contact.zip }
        </span>
        <span>{ contact.phone }</span><br />
        <span>{ contact.email }</span>
      </p>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

export default Contact;
