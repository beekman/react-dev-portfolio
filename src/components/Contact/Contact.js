import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Element } from 'react-scroll';
import Typist from 'react-typist';

const Contact = ({ contact }) => {

  return (
    <Element name="Contact" className="Contact">
      <div className={styles.Contact}>
        <ScrollAnimation animateIn="tada">
          <h1>{contact.heading}</h1>
        </ScrollAnimation>
        <p className={styles.hiringStatus}>{contact.hiringStatus}</p>
        <Typist cursor={{ show: false }}
        ><h2 className={styles.tagline}>{contact.tagline}</h2></Typist>
        <section className={styles.social}>
          {contact.name}<br />
          {contact.city}, {contact.state}<br />
          <a href='!tel:5417405681'>
            <FaPhone />{contact.phone}
          </a><br />
          <a href='!mailto:{contact.email}'><AiOutlineMail />{contact.email}</a><br />
          <a href={contact.linkedinURL}><FaLinkedin />/in/beekman</a><br />
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
    resumeLink: PropTypes.string,
    hiringStatus: PropTypes.string,
  })
};

export default Contact;
