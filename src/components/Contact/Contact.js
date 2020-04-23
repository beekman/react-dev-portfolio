import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Element } from 'react-scroll';
import Typist from 'react-typist';

const Contact = ({ contact }) => {

  return (
    <Element name="Contact" className="Contact">
      <div className={styles.Contact}>
        <h1>{contact.heading}</h1>
        <p>I am currently available for full-time and contract opportunities.</p>
        <Typist><h3 className={styles.tagline}>{contact.tagline}</h3></Typist>
        <div className={styles.address}>
          {contact.city}, {contact.state}<br />
          {contact.phone}<br />
          <a href='!mailto:{contact.email}'>{contact.email}</a>
        </div>
        <section className={styles.social}><a href={contact.linkedinURL}><FaLinkedin />My LinkedIn profile</a>
          <a href={contact.githubURL}><FaGithub />My GitHub profile</a>
        </section>
      </div >
      <a href={contact.resumeLink} target='_blank' rel='noopener noreferrer'>Download my resume</a>
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
    githubURL: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    resumeLink: PropTypes.string
  })
};

export default Contact;
