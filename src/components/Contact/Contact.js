import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.css';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import { Element } from 'react-scroll';
import Typist from 'react-typist';

const Contact = ({ contact }) => {

  return (
    <Element name="Contact" className="Contact">
      <div className={styles.Contact}>
        <h1>{contact.heading}</h1>
        <p>I am currently available for full-time and contract opportunities.</p>
        <Typist cursor={{ show: false }}
        ><h2 className={styles.tagline}>{contact.tagline}</h2></Typist>
        <div className={styles.address}>
          {contact.city}, {contact.state}<br />
          <a href='!tel:5417405681'>
            <FaPhone />{contact.phone}
          </a><br />
          <a href='!mailto:{contact.email}'><AiOutlineMail />{contact.email}</a>
        </div>
        <section className={styles.social}><a href={contact.linkedinURL}><FaLinkedin />/in/beekman</a><br />
          <a href={contact.githubURL}><FaGithub />/beekman</a>
        </section>
      </div >
      <a href={contact.resumeLink} target='_blank' rel='noopener noreferrer'>View my resume</a>
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
