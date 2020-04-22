import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Element } from 'react-scroll';

const Contact = ({ contact }) => {

  return (
    <Element name="Contact" className="Contact">
      <div className={styles.Contact}>
        <h1>{contact.heading}</h1>
        <div className="address">
          <p>{contact.name}<br />
            {contact.city}, {contact.state}<br />
            {contact.phone}<br />
            {contact.email}</p>
        </div>
        <section className={styles.social}><a href={contact.linkedinURL}><FaLinkedin /></a>
          <a href={contact.githubURL}><FaGithub /></a>
        </section>
      </div >
    </Element>
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
