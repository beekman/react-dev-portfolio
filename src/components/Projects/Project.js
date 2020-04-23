import React from 'react';
import PropTypes from 'prop-types';
import styles from './Projects.css';
import ScrollAnimation from 'react-animate-on-scroll';
import react from '../../assets/tech/thumbs/react-logo-60px.png';
import js from '../../assets/tech/thumbs/javascript-logo-60px.png';
import postgres from '../../assets/tech/thumbs/Postgresql-logo-60px.png';
import redux from '../../assets/tech/thumbs/redux-logo-60px.png';
import node from '../../assets/tech/thumbs/node-logo-60px.png';
import mongodb from '../../assets/tech/thumbs/mongodb-logo-60px.png';
import express from '../../assets/tech/thumbs/express-logo-60px.png';
import mongoose from '../../assets/tech/thumbs/mongoose-logo-60px.png';
import netlify from '../../assets/tech/thumbs/netlify-logo-60px.png';
import heroku from '../../assets/tech/thumbs/heroku-logo-60px.png';
import css from '../../assets/tech/thumbs/css-logo-60px.png';
import html from '../../assets/tech/thumbs/html-logo-60px.png';
import github from '../../assets/tech/thumbs/github-logo-60px.png';
import graphql from '../../assets/tech/thumbs/graphql-logo-60px.png';
import jest from '../../assets/tech/thumbs/jest-logo-60px.png';
import php from '../../assets/tech/thumbs/php-logo-60px.png';
import python from '../../assets/tech/thumbs/python-logo-60px.png';
import ts from '../../assets/tech/thumbs/typescript-logo-60px.png';
import sass from '../../assets/tech/thumbs/sass-logo-60px.png';
import socket from '../../assets/tech/thumbs/socket-logo-60px.png';
import kit from '../../assets/portfolio/kit.png';
import qwixx from '../../assets/portfolio/qwixx.png';
import frontpage from '../../assets/portfolio/frontpage.png';
import plantParenthood from '../../assets/portfolio/frontpage.png';

const Project = ({ feature }) => {



  const TechList = feature.tech.map((tech, i) => {
    const iconObj = {
      'React': react,
      'JavaScript': js,
      'PostgreSQL': postgres,
      'Redux': redux,
      'Node': node,
      'Netlify': netlify,
      'MongoDB': mongodb,
      'Express': express,
      'Mongoose': mongoose,
      'Heroku': heroku,
      'CSS': css,
      'HTML': html,
      'GitHub': github,
      'GraphQL': graphql,
      'Jest': jest,
      'PHP': php,
      'Python': python,
      'TypeScript': ts,
      'SASS': sass,
      'SocketIO': socket
    };

    return <li key={i} className={styles.Tech}>
      <img src={iconObj[tech.name]} alt={tech.name} title={tech.name} />
    </li >;
  });

  const screenObj = {
    'kit: Keep In Touch': kit,
    'Plant Parenthood': plantParenthood,
    'FrontPage': frontpage,
    'Qwixx': qwixx
  };

  return (
    <>
      <div className={styles.feature}>
        <div><h2>{feature.title}</h2>
          <p>{feature.description}</p>

          <div className={styles.links}>
            <a href={feature.github} target='_blank' rel='noopener noreferrer'>Github Repo</a>
            <a href={feature.demo} target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </div>
        <div>
          <ScrollAnimation animateIn="fadeInUp">
            <img src={screenObj[feature.title]} alt={feature.title} title={feature.title} />
          </ScrollAnimation>
        </div>

      </div>
      <section><span className={styles.usedTechHeading}>Tech stack:</span>
        <div className={styles.tech}>
          {TechList}
        </div>
      </section>

    </>
  );
};

Project.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    github: PropTypes.string,
    demo: PropTypes.string,
    tech: PropTypes.shape([{
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
    }]).isRequired,
  }),
};

export default Project;
