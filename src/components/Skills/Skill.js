import React from 'react';
import PropTypes from 'prop-types';
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
import css from '../../assets/tech/thumbs/css-logo-60px.png';
import travis from '../../assets/tech/thumbs/travis-cl-60px.png';
import html from '../../assets/tech/thumbs/html-logo-60px.png';
import github from '../../assets/tech/thumbs/github-logo-60px.png';
import graphql from '../../assets/tech/thumbs/graphql-logo-60px.png';
import jest from '../../assets/tech/thumbs/jest-logo-60px.png';
import php from '../../assets/tech/thumbs/php-logo-60px.png';
import python from '../../assets/tech/thumbs/python-logo-60px.png';
import ts from '../../assets/tech/thumbs/typescript-logo-60px.png';
import sass from '../../assets/tech/thumbs/sass-logo-60px.png';
import socket from '../../assets/tech/thumbs/socket-logo-60px.png';
import shell from '../../assets/tech/thumbs/shell-logo-60.png';
import raspberryPi from '../../assets/tech/thumbs/raspberry-pi-logo-60px.png';
import d3 from '../../assets/tech/thumbs/d3-logo-60.png';
import flask from '../../assets/tech/thumbs/flask-logo-60px.png';

const Skill = ({ skill }) => {
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
    'Git': github,
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
    'Flask': flask,
    'TravisCl': travis
  };
  return (
    <>
      <div><img src={iconObj[skill.name]} alt={skill.name} title={skill.name} /></div>
      <p>{skill.name}</p>
    </>
  );
};

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Skill;
