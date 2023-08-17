import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import johanna from '../../assets/portfolio/thumbs/johanna.png';
import rsbLaw from '../../assets/portfolio/thumbs/rsbLaw.png';
import digitalPlanet from '../../assets/portfolio/thumbs/digitalPlanet.png';
import erskineSolarArt from '../../assets/portfolio/thumbs/erskineSolarArt.png';
import freshops from '../../assets/portfolio/thumbs/freshops.png';
import oasis from '../../assets/portfolio/thumbs/oasis.png';
import styles from './Projects.css';

const Site = ({ site }) => {

  const screenObj = {
    'Erskine Solar Art': erskineSolarArt,
    'Digital Planet': digitalPlanet,
    'Oasis Life Design': oasis,
    'Freshops': freshops,
    'Johanna': johanna,
    'RSB Law': rsbLaw
  };

  return (
    <>
      <ScrollAnimation animateIn="fadeInRight">
        <img src={screenObj[site.title]} alt={site.title} title={site.title} />
      </ScrollAnimation>
    </>
  );
};
Site.propTypes = {
  site: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    github: PropTypes.string,
    demo: PropTypes.string,
    tech: PropTypes.array.isRequired
  }),
};

export default Site;

