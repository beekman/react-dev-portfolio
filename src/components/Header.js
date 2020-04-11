import React, { Component } from 'react';
import styles from './App.css';

const Header = ({ header }) => {
  return (
    <header className={ styles.Header }>
      <h1>Ben Beekman, Software Developer and so much more</h1>
    </header>
  );
};

export default Header;
