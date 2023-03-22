import React from 'react';
import PropTypes from 'prop-types';
import styles from './Projects.css';
import ScrollAnimation from 'react-animate-on-scroll';
import react from '../../assets/tech/thumbs/react-logo-60px.png';
import js from '../../assets/tech/thumbs/javascript-logo-60px.png';
import postgres from '../../assets/tech/thumbs/Postgresql-logo-60px.png';
import redux from '../../assets/tech/thumbs/redux-logo-60px.png';
import node from '../../assets/tech/thumbs/node-logo-60px.png';
import mongodb from '../../assets/tech/thumbs/mongo-logo-60px.png';
import express from '../../assets/tech/thumbs/express-logo-60px-square.png';
import mongoose from '../../assets/tech/thumbs/mongoose-logo-60px-square.png';
import netlify from '../../assets/tech/thumbs/netlify-logo-60px.png';
import heroku from '../../assets/tech/thumbs/heroku-logo-60px.png';
import raspberryPi from '../../assets/tech/thumbs/raspberry-pi-logo-60px.png';
import shell from '../../assets/tech/thumbs/shell-logo-60.png';
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
import d3 from '../../assets/tech/thumbs/d3-logo-60.png';
import magentajs from '../../assets/tech/thumbs/magenta-60px.png';
import p5 from '../../assets/tech/thumbs/p5-60px.png';
import ml5 from '../../assets/tech/thumbs/ml5-60px.png';
import tone from '../../assets/tech/thumbs/tone-60px.png';
import travis from '../../assets/tech/thumbs/travis-cl-60px.png';
import palettePopulator from '../../assets/portfolio/palettePopulator.png';
import kit from '../../assets/portfolio/kit.png';
import qwixx from '../../assets/portfolio/qwixx.png';
import frontpage from '../../assets/portfolio/frontpage.png';
import plantParenthood from '../../assets/portfolio/plantParenthood.png';
import digitalPlanet from '../../assets/portfolio/digitalPlanet.png';
import erskineSolarArt from '../../assets/portfolio/erskineSolarArt.png';
import whateverSynth from '../../assets/portfolio/whateverSynth.png';
import shapeways from '../../assets/portfolio/shapeways.png';

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
      'SocketIO': socket,
      'Shell': shell,
      'Raspberry Pi': raspberryPi,
      'D3': d3,
      'TravisCl': travis,
      'MagentaJS': magentajs,
      'P5JS': p5,
      'ToneJS': tone,
      'ML5': ml5,
    };

    return <li key={i} className={styles.Tech}>
      <img src={iconObj[tech.name]} alt={tech.name} title={tech.name} />
    </li >;
  });

  const screenObj = {
    'Live Palette Populator': palettePopulator,
    'kit: Keep In Touch': kit,
    'Plant Parenthood': plantParenthood,
    'FrontPage': frontpage,
    'Qwixx': qwixx,
    'Erskine Solar Art': erskineSolarArt,
    'Digital Planet': digitalPlanet,
    'whateverSynth': whateverSynth,
    'Shapeways': shapeways,
  };

  return (
    <>
      <div className={styles.feature}>
        <div className={styles.summary}><h2>{feature.title}</h2>
          <p>{feature.description}</p>

          <div className={styles.links}>

            <a href={feature.github} target='_blank' rel='noopener noreferrer'>View on Github</a>
            {feature.demo ?
              <a href={feature.demo} target='_blank' rel='noopener noreferrer'>Live Demo</a>
              :
              null
            }
          </div>
        </div>
        <div className={styles.mediaBox}>
          <ScrollAnimation animateIn="fadeInUp">
            <img src={screenObj[feature.title]} alt={feature.title} title={feature.title} />
          </ScrollAnimation>
          <section className={styles.usedTech}><h2>Tech stack</h2>
            <div className={styles.tech}>
              {TechList}
            </div>
          </section>
        </div>

      </div>
    </>
  );
};

Project.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    github: PropTypes.string,
    demo: PropTypes.string,
    tech: PropTypes.array.isRequired
  }),
};

export default Project;

